import { useContext, useState, useEffect } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { db } from "../../utility/firebase";
import { DataContext } from "../../DataProvider/DataProvider";
import styles from "./Orders.module.css";
import ProductCard from "../../components/product/ProductCard";

// ✅ Firestore v9 imports
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const Orders = () => {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // ✅ build reference in v9 style
      const ordersRef = collection(doc(db, "users", user.uid), "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      // ✅ subscribe to snapshot
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return () => unsubscribe(); // cleanup listener
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.order_container}>
          <h2>Your Orders</h2>
          <hr />
          {
            orders?.length==0 && <div style={{padding:"20px"}}>You do not have orders yet.</div>
          }


        </div>
        <div>
          {/* orderd items */}
          {orders?.map((eachOrder, i) => (
            <div key={i}>
              <hr />
              <p>Order ID: {eachOrder?.id}</p>
              {eachOrder?.data?.basket?.map((order) => (
                <ProductCard flex={true} product={order} key={order.id} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
