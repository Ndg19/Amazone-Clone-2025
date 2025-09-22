import { useContext, useEffect } from "react";
import Routing from "../Router";
import "./App.css";
import { DataContext } from "./DataProvider/DataProvider";
import { Type } from "./utility/Action.type";
import { auth } from "./utility/firebase";

function App() {
  const [  , dispatch] = useContext(DataContext);

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;
