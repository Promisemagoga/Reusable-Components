import { Text } from "../Text/Text";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>El Bonno</div>
        <ul className={styles.navLinks}>
          <Text variant="span">Products</Text>
          <Text variant="span">Interior</Text>
          <Text variant="span">About</Text>
          <Text variant="span">Contact</Text>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
