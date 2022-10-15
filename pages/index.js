import Head from "next/head";
import Layout from "../components/Layout";
import About from "../pages/about";
import Skills from "../pages/skills";
import Portfolio from "../pages/Portfolio";
import Contacts from "../pages/contact";
import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import styles from "../styles/Home.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5,
    },
  },
};

export default function Home() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/11yHEIWrCTzd8mnVgO2EX6i-U_JaLaMx3/view?usp=sharing"
    );
  };
  // const URL =
  //   "https://drive.google.com/file/d/11yHEIWrCTzd8mnVgO2EX6i-U_JaLaMx3/view?usp=sharing";

  // if (typeof window !== "undefined") {
  //   window.location.href = URL;
  // }
  return (
    <>
      <div className={styles.homepage}>
        <Image
          className={styles.heroImage}
          src="/images/hero.jpg"
          alt="hero"
          height={350}
          width={350}
        />
        <div className={styles.hero}>
          <h2>
            HI THERE <br></br>
            MY NAME IS JAMES MWENDWA
          </h2>
          <p>A SOFTWARE ENGINEER BASED IN NAIROBI, KENYA</p>
          <br></br>
          <motion.button
            className={styles.button}
            variants={buttonVariants}
            whileHover="hover"
            onClick={saveFile}
          >
            DOWNLOAD CV
            <FileDownloadIcon />
          </motion.button>
        </div>
      </div>
      {/* <div className={styles.socials}>
        <GitHubIcon />
        <LinkedInIcon />
      </div> */}
      <>
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </>
    </>
  );
}
