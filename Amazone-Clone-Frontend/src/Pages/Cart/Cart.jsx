import { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../components/product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const [{ basket }] = useContext(DataContext);

  const total = basket.reduce((amount, item) => item.price + amount, 0);

  return (
    <LayOut>
      <section className={styles.cartContainer}>
        {/* LEFT SIDE - CART ITEMS */}
        <div className={styles.cartItems}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p className={styles.emptyCart}>Oops! No items in your cart.</p>
          ) : (
            basket.map((item, i) => (
              <div key={i} className={styles.cartItemCard}>
                <img src={item.image} alt={item.title} />
                <div className={styles.cartItemDetails}>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  <div className={styles.cartItemPrice}>
                    <CurrencyFormat value={item.price} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE - SUBTOTAL */}
        {basket?.length > 0 && (
          <div className={styles.cartSummary}>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong>
                <CurrencyFormat value={total} />
              </strong>
            </p>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments" className={styles.checkoutBtn}>
              Continue to Checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
