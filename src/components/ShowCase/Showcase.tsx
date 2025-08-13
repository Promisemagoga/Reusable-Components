import styles from './Showcase.module.css';

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <h2>
        Passion, furnishings, and flair meet in our latest serene collection. Well-analysed for you.
      </h2>
      <button className={styles.cta}>Explore Collection</button>
    </section>
  );
};

export default Showcase;
