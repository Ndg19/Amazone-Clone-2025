import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import styles from "./Caraousel.module.css"

const Caraousel = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imagelink) => {
          return <img src={imagelink} />;
        })}
      </Carousel>
      <div className={styles.hero_img}></div>
    </div>
  );
};

export default Caraousel;
