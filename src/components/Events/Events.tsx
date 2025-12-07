import styles from "./Events.module.css";
import img1 from "../../assets/events/1.png";
import img2 from "../../assets/events/2.png";
import img3 from "../../assets/events/3.png";
import img4 from "../../assets/events/4.png";
import img5 from "../../assets/events/5.png";

const data = [
  { title: "TWO COFFEE FOR 1 PRICE", img: img1 },
  { title: "KITCHEN TOUR", img: img2 },
  { title: "FREE COFFEE FOR 3 COFFEE", img: img3 },
  { title: "OUR INSTAGRAM", img: img4 },
  { title: "WHERE ARE YOU CHOOSE US?", img: img5 },
];

function Events() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.info}>
            <p>
              Only in 2021 we have made more than 100,000 orders for you, your
              loved ones, all of you, and in 2022 we are ready to destroy the
              market
            </p>
            <h2>
              Our New <span>Events</span>
            </h2>
          </div>
        </div>
        <div className={styles.grid}>
          {data.map((item) => (
            <article className={styles.item} key={item.title}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <button>More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
