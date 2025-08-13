import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import styles from "./Showcase.module.css";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <Text variant="h2">
        Passion, furnishings, and flair meet in our latest serene collection.
        Well-analysed for you.
      </Text>

      <Button text="Explore Collection" />
    </section>
  );
};

export default Showcase;
