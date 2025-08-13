import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import styles from "./HighlightCard.module.css";

type Props = {
  title: string;
  description: string;
  image: string;
};

const HighlightCard = ({ title, description, image }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <Text variant="h2">{title}</Text>
        <Text variant="p">{description}</Text>
        <Button text="Learn More" />
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default HighlightCard;
