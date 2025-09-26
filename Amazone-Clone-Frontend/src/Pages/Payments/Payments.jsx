import React, { useState, useEffect ,useContext} from "react";
import { useStateValue } from "../../DataProvider/DataProvider";
import { getBasketTotal } from "../../utility/reducer";
import ProductCard from "../../components/product/ProductCard";
import LayOut from "../../components/LayOut/LayOut";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { loadStripe } from "@stripe/stripe-js";
import { DataContext } from "../../DataProvider/DataProvider";
import { doc, setDoc } from "firebase/firestore";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { axiosInstance } from "../../Api/axios";
import styles from "./payments.module.css";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { db } from "../../utility/firebase";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ basket }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext);

  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // Generate client secret whenever basket changes
  useEffect(() => {
    if (basket.length > 0) {
      const total = Math.round(getBasketTotal(basket) * 100); // cents
      axiosInstance
        .post(`/payment/create?total=${total}`)
        .then((res) => {
          if (res.data?.clientsecret) {
            setClientSecret(res.data.clientsecret);
          } else {
            console.error("No client secret returned from backend");
          }
        })
        .catch((err) => console.error("Payment error:", err));
    }
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret || !user) return;

    setProcessing(true);
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card Element not found");
      setProcessing(false);
      return;
    }

    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (payload.error) {
        setError(payload.error.message);
        setProcessing(false);
        return;
      }

      const paymentIntent = payload.paymentIntent;

      // Store order in Firestore
      await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
        basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      setError(null);
      setSucceeded(true);
      setProcessing(false);

      console.log("Payment succeeded!");
      setTimeout(() => navigate("/orders"), 1500);
    } catch (err) {
      console.error("Payment/Firestore error:", err);
      setError(err.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.paymentForm}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <div className={styles.totalPrice}>
        Total: <CurrencyFormat value={getBasketTotal(basket)} />
      </div>
      <button
        type="submit"
        disabled={processing || succeeded || !stripe || !clientSecret}
        className={styles.payButton}
      >
        {processing ? (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Processing <ClipLoader color="gray" size={12} />
          </div>
        ) : (
          "Pay Now"
        )}
      </button>
      {error && <div className={styles.error}>{error}</div>}
      {succeeded && <div className={styles.success}>Payment Successful!</div>}
    </form>
  );
};

const Payments = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <LayOut>
      <div className={styles.payments}>
        <div className={styles.checkoutContainer}>
          <h1 className={styles.checkoutTitle}>
            Checkout ({basket?.length} items)
          </h1>

          {/* Delivery Address */}
          <div className={styles.section}>
            <div className={styles.sectionRow}>
              <h3>Delivery Address</h3>
              <div className={styles.sectionContent}>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Review Items */}
          <div className={styles.flex}>
            <h3>Review Items</h3>
            <div className={styles.hh}>
              {basket?.map((item, index) => (
                <ProductCard key={`${item.id}-${index}`} product={item} flex />
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className={styles.section}>
            <div className={styles.sectionRow}>
              <h3>Payment Method</h3>
              <div className={styles.sectionContent}>
                <Elements stripe={stripePromise}>
                  <PaymentForm basket={basket} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Payments;
