import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/product/ProductCard";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../components/Loder/Loder";

const ProductDetails = () => {
  const { productId } = useParams(); // route must be /product/:productId
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : product ? (
        <ProductCard product={product} flex={true} renderDesc={true}/>

      ) : (
        <p>Product not found</p>
        
      )}
    
    </LayOut>
  );
};

export default ProductDetails;
