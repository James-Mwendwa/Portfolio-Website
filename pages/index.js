import Head from "next/head";
import Layout from "../components/Layout";
import About from "../pages/about";
import Skills from "../pages/skills";
import Portfolio from "../pages/works";
import Contacts from "../pages/contact";
import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import styles from "../styles/Home.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <>
      <div className={styles.socials}>
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <div className={styles.homepage}>
        <Image
          className={styles.heroImage}
          src="/images/hero.jpg"
          alt="hero"
          height={350}
          width={350}
        />
        <div className="hero">
          <h2>
            HI THERE <br></br>
            MY NAME IS JAMES MWENDWA
          </h2>
          <p>A SOFTWARE ENGINEER BASED IN NAIROBI, KENYA</p>
          <br></br>
          <button className={styles.button}>
            DOWNLOAD CV
            <FileDownloadIcon />
          </button>
        </div>
      </div>
      <>
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </>
    </>
  );
}
