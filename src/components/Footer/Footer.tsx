import { Text } from "../Text/Text";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <Text variant="h4">Explore</Text>
          <ul>
            <li>Interior</li>
            <li>Work</li>
            <li>Studio</li>
          </ul>
        </div>
        <div>
          <Text variant="h4">Contact</Text>
          <ul>
            <li>Email</li>
            <li>Phone</li>
            <li>Social</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <Text variant="p">&copy; 2025 El Bonno. All rights reserved.</Text>
      </div>
    </footer>
  );
};

export default Footer;
