import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./src/Pages/LandingPage/Landing";
import Auth from "./src/Pages/Auth/Auth";
import Payments from "./src/Pages/Payments/Payments";
import Orders from "./src/Pages/Orders/Orders";
import Cart from "./src/Pages/Cart/Cart";
import Results from "./src/Pages/Results/Results";
import ProductDetails from "./src/Pages/ProductDetails/ProductDetails";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRout from "./src/components/ProtectedRouts/ProtectedRout";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route
          path="/Payments"
          element={
            <ProtectedRout msg={"You must login to pay"} redirect={"/Payments"}>
              <Elements stripe={stripePromise}>
                <Payments />
              </Elements>
            </ProtectedRout>
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRout msg={"You must login to see Your orders"} redirect={"/Orders"}>
              <Orders />
            </ProtectedRout>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
