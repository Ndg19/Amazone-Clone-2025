import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./src/Pages/LandingPage/Landing";
import Auth from "./src/Pages/Auth/Auth";
import Payments from "./src/Pages/Payments/Payments";
import Orders from "./src/Pages/Orders/Orders";
import Cart from "./src/Pages/Cart/Cart";
import Results from "./src/Pages/Results/Results";
import ProductDetails from "./src/Pages/ProductDetails/ProductDetails";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
