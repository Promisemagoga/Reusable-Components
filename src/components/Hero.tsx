import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>As office dis book llove it's lijch</h1>
        <p>
          Modern workspace solutions blended with elegance and convenience.
          Discover collections perfect for your personal and professional interiors.
        </p>
        <button className={styles.cta}>Discover More</button>
      </div>
      
    </section>
  );
};

export default Hero;