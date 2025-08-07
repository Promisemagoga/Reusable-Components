import styles from './HighlightCard.module.css';

type Props = {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
};

const HighlightCard = ({ title, description, image, buttonText }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
        {buttonText && <button>{buttonText}</button>}
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default HighlightCard;
