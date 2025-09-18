import { AiOutlineMenu } from "react-icons/ai";
import styles from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={styles.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu size={22} />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Prime Video</li>
        <li>Customer service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
