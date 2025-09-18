import LayOut from "../../components/LayOut/LayOut";
import Caraousel from "../../components/caraousel/Carousel"
import Catagory from "../../components/Catagory/Catagory";
import Product from "../../components/product/Product";

const Landing = () => {
  return (
    <LayOut>
      <Caraousel />
      <Catagory />
      <Product />
    </LayOut>
  );
};

export default Landing;
