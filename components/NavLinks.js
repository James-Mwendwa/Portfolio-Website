import Link from "next/link";
import styles from "./navbar.module.css";

function NavLinks() {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link href="/">
          <h2 className={styles.logo}>CODE</h2>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/skills">
          <a>SKILLS</a>
        </Link>
        <Link href="/works">
          <a>PORTFOLIO</a>
        </Link>
        <Link href="/contact">
          <a>CONTACTS</a>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
