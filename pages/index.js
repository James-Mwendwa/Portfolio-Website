import Head from "next/head";
import Layout from "../components/Layout";
import About from "../pages/about";
import Skills from "../pages/skills";
import Portfolio from "../pages/works";
import Contacts from "../pages/contact";
import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Home() {
  return (
    <>
      <div className="homepage">
        <Image src="/images/hero.jpg" alt="hero" width={70} height={70} />
        <h2>
          HI THERE <br></br> MY NAME IS JAMES MWENDWA
        </h2>
        <button>
          DOWNLOAD CV
          <FileDownloadIcon />
        </button>
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
