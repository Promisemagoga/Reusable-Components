import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>Interior</li>
            <li>Work</li>
            <li>Studio</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email</li>
            <li>Phone</li>
            <li>Social</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2025 El Bonno. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
