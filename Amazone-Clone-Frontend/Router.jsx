import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./src/Pages/LandingPage/Landing";
import SignUp from "./src/Pages/Auth/SignUp";
import Payments from "./src/Pages/Payments/Payments";
import Orders from "./src/Pages/Orders/Orders";
import Cart from "./src/Pages/Cart/Cart";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<SignUp />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
