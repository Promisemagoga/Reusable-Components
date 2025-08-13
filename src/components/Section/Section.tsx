import { Text } from "../Text/Text";
import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

const Section = ({ title, description, image, reverse }: SectionProps) => {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.text}>
        <Text variant="h2">{title}</Text>
        <Text variant="p">{description}</Text>
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default Section;
