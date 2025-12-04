import styles from "./Delicious.module.css";
import image from "../../assets/delicious/img.png";
import BlurCircle from "../BlurCircle/BlurCircle";
import Video from "../Video/Video";

function Delicious() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imageWrapper}>
            <img src={image} alt="" />
            <BlurCircle width={290} height={245} bottom={-64} left={-56} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              We make <span>delicious</span>
            </h2>
            <p className={styles.subtitle}>
              Only in 2021 we have made more than 100,000 orders for you, your
              loved ones, all of you, and in 2022 we are ready to destroy the
              market
            </p>

            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delicious;
