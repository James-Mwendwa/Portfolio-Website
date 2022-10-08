import Head from "next/head";
import styles from "../styles/Work.module.css";

function Works() {
  return (
    <>
      <Head>
        <title>Portfolio | Portfolio</title>
        <meta name="keywords" content="work" />
      </Head>
      <div>
        <h2 className={styles.title}>Projects</h2>
      </div>
    </>
  );
}

export default Works;
