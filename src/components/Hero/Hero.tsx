import { Button } from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>As office dis book llove it's lijch</h1>
        <p>
          Modern workspace solutions blended with elegance and convenience.
          Discover collections perfect for your personal and professional
          interiors.
        </p>
        <Button text="Discover More" />
      </div>
    </section>
  );
};

export default Hero;
