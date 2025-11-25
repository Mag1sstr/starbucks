"use client";

import { useState } from "react";
import styles from "./Video.module.css";

function Video() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  return (
    <div className={styles.vid}>
      {play && (
        <iframe
          className={styles.player}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xS8UsA1YB_s?autoplay=1"
          title="video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
      <button onClick={handlePlay} className={styles.play}>
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
    </div>
  );
}

export default Video;
