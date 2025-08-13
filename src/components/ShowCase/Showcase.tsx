import { Button } from "../Button/Button";
import styles from "./Showcase.module.css";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <h2>
        Passion, furnishings, and flair meet in our latest serene collection.
        Well-analysed for you.
      </h2>
      <Button text="Explore Collection" />
    </section>
  );
};

export default Showcase;
