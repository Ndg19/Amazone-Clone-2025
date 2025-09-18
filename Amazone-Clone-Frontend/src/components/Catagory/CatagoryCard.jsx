import { Link } from "react-router-dom";
import styles from "./Catagory.module.css";

function CatagoryCard({ data }) {
  return (
    <div className={styles.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.name}</h2>
        </span>
        <img src={data?.image} alt={data?.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
