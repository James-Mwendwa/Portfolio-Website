import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <h2 className={styles.logo}>CODE</h2>
        </Link>
        <div className={styles.navbar}>
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
      <div className={styles.underline}></div>
    </>
  );
}

export default Navbar;
