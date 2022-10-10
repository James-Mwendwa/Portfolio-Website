import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Work.module.css";
import { projects } from "../lib/data";

function Works() {
  return (
    <>
      <Head>
        <title>Portfolio | Portfolio</title>
        <meta name="keywords" content="work" />
      </Head>
      <div className={styles.projects}>
        <h2 className={styles.title}>PROJECTS</h2>
        {projects.map((project, index) => {
          return (
            <div className={styles.container} key={index}>
              <div className={styles.image}>
                <Image
                  src={project.image}
                  alt={project.image}
                  height={250}
                  width={500}
                />
              </div>
              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Works;
