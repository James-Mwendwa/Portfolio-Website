import Head from "next/head";
import styles from "../styles/Skills.module.css";

function Skills() {
  return (
    <>
      <Head>
        <title>Portfolio | Skills</title>
        <meta name="keywords" content="work" />
      </Head>

      <div className={styles.skills}>
        <h2 className={styles.title}>SkILLS</h2>
        <div className={styles.skillsCard}>
          <div className={styles.card}>
            <div className={styles.skillCard}>
              <h3>HTML</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>CSS</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>JAVASCRIPT</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>REACT</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>TYPESCRIPT</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>NEXT</h3>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.skillCard}>
              <h3>NODE</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>EXPRESS</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>MONGODB</h3>
            </div>
            <div className={styles.skillCard}>
              <h3>FIREBASE</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
