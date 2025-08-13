import { Text } from "../Text/Text";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <Text variant="h2">Explore</Text>
          <ul>
            <Text variant="span">Interior</Text>
            <Text variant="span">Work</Text>
            <Text variant="span">Studio</Text>
          </ul>
        </div>
        <div>
          <Text variant="h2">Contact</Text>
          <ul>
            <Text variant="span">Email</Text>
            <Text variant="span">Phone</Text>
            <Text variant="span">Social</Text>
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
