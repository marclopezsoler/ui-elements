import Shoe from "./Shoe";
import airmax270 from "../images/nike_air_max_270.png";
import airmax90 from "../images/nike_air_max_90.png";
import styles from "./ShoeParent.module.scss";

function ShoeParent() {
  return (
    <>
      <div className={styles.shoeParent}>
        <h2 className={styles.title}>Bestsellers</h2>
        <div className={styles.carroussel}>
          <Shoe
            image={airmax270}
            name={"Nike Air Max 270"}
            brand={"Nike"}
            price={"$195.80"}
          />
          <Shoe
            image={airmax90}
            name={"Nike Air Max 90"}
            brand={"Nike"}
            price={"$195.80"}
          />
          <Shoe
            image={airmax270}
            name={"Nike Air Max Plus"}
            brand={"Nike"}
            price={"$195.80"}
          />
        </div>
      </div>
    </>
  );
}

export default ShoeParent;
