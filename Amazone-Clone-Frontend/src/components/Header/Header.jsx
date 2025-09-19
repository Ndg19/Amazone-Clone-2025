import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import {Link} from "react-router-dom";
import styles from "./Header.module.css"; // ✅ CSS Modules
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";

const Header = () => {
 const[{basket} ,dispatch]=useContext(DataContext)
// console.log(basket,length)
  return (
    <section className={styles.fixed}>
      <section className={styles.header_container}>
        {/* Logo + Delivery */}
        <div className={styles.Logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className={styles.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <BsSearch size={25} />
        </div>

        {/* Orders + Cart */}
        <div className={styles.order_container}>
          {/* Language */}
          <Link to="#" className={styles.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
              alt="us flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>

          {/* Sign in */}
          <Link to="/SignUp">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/Orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/Cart" className={styles.cart}>
            <div className={styles.iconWrapper}>
              <BiCart size={35} />
              <span className={styles.badge}>{basket.length}</span>
            </div>
            <p>Cart</p>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
