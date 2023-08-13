import styles from "./Shoe.module.scss";
import link from "../images/open_link.svg";

function Shoe({ image, name, brand, price }) {
  return (
    <section className={styles.shoe}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.details}>
        <h2>{name}</h2>
        <span>{brand}</span>
        <a>{price}</a>
      </div>
      <figcaption>Buy this item here <img src={link} className={styles.icon}/></figcaption>
    </section>
  );
}

export default Shoe;
