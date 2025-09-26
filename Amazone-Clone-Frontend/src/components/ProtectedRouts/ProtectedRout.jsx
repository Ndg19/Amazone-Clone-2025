import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider";

const ProtectedRout = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      // Redirect to auth if not logged in
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]); // Include all dependencies

  return children; // Render protected content if user exists
};

export default ProtectedRout;
