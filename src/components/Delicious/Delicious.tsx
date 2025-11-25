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
            {/* <div className={styles.vid}>
              <iframe
                id="yt-player"
                className={styles.player}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xS8UsA1YB_s?enablejsapi=1"
                title="make drinks at starbucks! starbucks barista vlog"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <button className={styles.play}>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3594 10.6055C17.6839 10.7995 17.6839 11.2688 17.3594 11.4629L2.25683 20.4941C1.92359 20.6934 1.50008 20.4537 1.5 20.0654L1.5 2.00293C1.50008 1.61468 1.92359 1.37495 2.25684 1.57422L17.3594 10.6055Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeMiterlimit="1.55572"
                  />
                </svg>
                Cooking Process
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delicious;
