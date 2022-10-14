import styles from "./navbar.module.css";
import Mobile from "../components/Mobile";
import Navigation from "../components/Navigation";

function Navbar() {
  return (
    <>
      <div>
        <Mobile />
        <Navigation />
      </div>
      <div className={styles.underline}></div>
    </>
  );
}

export default Navbar;
