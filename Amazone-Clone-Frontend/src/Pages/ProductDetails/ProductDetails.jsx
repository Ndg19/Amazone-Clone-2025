import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/product/ProductCard";
import { productUrl } from "../../Api/endPoints";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { productId } = useParams(); // make sure your route matches :productId
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!product) {
    return (
      <LayOut>
        <p>Loading product details...</p>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <div className={styles.detailsWrapper}>
        <ProductCard product={product} />
      </div>
    </LayOut>
  );
};

export default ProductDetails;
