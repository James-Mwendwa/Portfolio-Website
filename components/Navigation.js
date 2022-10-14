import NavLinks from "../components/NavLinks";
import styles from "./navbar.module.css";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavLinks />
    </div>
  );
}

export default Navigation;
