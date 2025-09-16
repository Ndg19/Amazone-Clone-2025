import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css"; // ✅ CSS Modules
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section className={styles.header_container}>
        {/* Logo + Delivery */}
        <div className={styles.Logo_container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
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
          <a href="#" className={styles.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
              alt="us flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </a>

          {/* Sign in */}
          <a href="#">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>

          {/* Orders */}
          <a href="#">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* Cart */}
          <a href="#" className={styles.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
    <LowerHeader />
    </>
  );
};

export default Header;
