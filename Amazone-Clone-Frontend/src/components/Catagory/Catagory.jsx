import { CatagoryInfo } from "./catagoryFullinfo";
import CatagoryCard from "./CatagoryCard";
import styles from "./Catagory.module.css"

function Catagory() {
  return (
    <section className={styles.Catagory_container}>
      {CatagoryInfo.map((infos) => (
        <CatagoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Catagory;
