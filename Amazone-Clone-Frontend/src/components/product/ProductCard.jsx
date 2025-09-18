import Rating from "@mui/material/Rating";
import styles from "./Product.module.css";
import {Link} from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

const ProductCard = ({ product }) => {
  const { title, image, price, rating,id } = product;

  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={styles.productImage} />
      </Link>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.rating}>
          <Rating
            value={rating?.rate || 0}
            precision={0.1}
            readOnly
            size="small"
          />
          <span className={styles.rateCount}>({rating?.count || 0})</span>
        </div>
        <div className={styles.price}>
          <CurrencyFormat value={price} />
        </div>
        {/* Add to Cart button */}
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
