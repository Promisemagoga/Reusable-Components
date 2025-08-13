import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Text variant="h1">As office dis book llove it's lijch</Text>
        <Text variant="p">
          Modern workspace solutions blended with elegance and convenience.
          Discover collections perfect for your personal and professional
          interiors.
        </Text>
        <Button text="Discover More" />
      </div>
    </section>
  );
};

export default Hero;
