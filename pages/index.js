import Head from "next/head";
import Layout from "../components/Layout";
import About from "../pages/about";
import Skills from "../pages/skills";
import Portfolio from "../pages/works";
import Contacts from "../pages/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="keywords" content="work" />
      </Head>
      <Layout>
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </Layout>
    </>
  );
}
