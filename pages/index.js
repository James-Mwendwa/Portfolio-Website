import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="keywords" content="work" />
      </Head>

      <div className={styles.container}>
        <h2>Portfolio Website</h2>
      </div>
    </>
  );
}
