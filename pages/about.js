import Head from "next/head";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
        <meta name="keywords" content="work" />
      </Head>
      <div className={styles.about}>
        <h2 className={styles.title}>ABOUT ME</h2>

        <p className={styles.desc}>
          Hello, My name is James Mwendwa a Software Engineer based in Nairobi,
          Kenya. I am a Javascript and Typescript developer <br></br>
          that focuses on building products and solving problems using Frontend
          Frameworks such as React and Next.
        </p>

        <p className={styles.desc}>
          I have interest in Backend Development having used Node js, Express js
          and MongoDB to build my projects.<br></br>I am currently open for
          frontend roles where i can use my skills to build products.
        </p>

        <p className={styles.desc}>
          I am always willing to constantly learn from other developers and
          collaborate on different projects
        </p>
      </div>
    </>
  );
}

export default About;
