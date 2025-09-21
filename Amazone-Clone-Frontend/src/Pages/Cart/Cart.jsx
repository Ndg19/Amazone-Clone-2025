import { useContext, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { Type } from "../../utility/Action.type";

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  const [selectedItems, setSelectedItems] = useState([]);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => {
    dispatch({ type: Type.ADD_TO_BASKET, item });
  };

  const decrement = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });
  };

  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const removeSelected = () => {
    selectedItems.forEach((id) => {
      dispatch({ type: Type.REMOVE_FROM_BASKET, id });
    });
    setSelectedItems([]);
  };

  const selectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(basket.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

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
            <>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="checkbox"
                  checked={selectedItems.length === basket.length}
                  onChange={selectAll}
                />{" "}
                Select All
                {selectedItems.length > 0 && (
                  <button
                    onClick={removeSelected}
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove Selected
                  </button>
                )}
              </div>

              {basket.map((item, i) => (
                <div key={i} className={styles.cartItemCard}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                  />
                  <img src={item.image} alt={item.title} />
                  <div className={styles.cartItemDetails}>
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    <div className={styles.cartItemPrice}>
                      <CurrencyFormat value={item.price} />
                    </div>
                  </div>
                  <div className={styles.quantityControls}>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <span>{item.amount}</span>
                    <button onClick={() => increment(item)}>+</button>
                  </div>
                </div>
              ))}
            </>
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
