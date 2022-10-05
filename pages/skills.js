import Head from "next/head";
import React from "react";

function Skills() {
  return (
    <>
      <Head>
        <title>Portfolio | Skills</title>
        <meta name="keywords" content="work" />
      </Head>
      <div>
        <h2>SkILLS</h2>
        <div className="cards">
          <div className="skillCard">
            <h3>HTML</h3>
          </div>
          <div className="skillCard">
            <h3>CSS</h3>
          </div>
          <div className="skillCard">
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="skillCard">
            <h3>REACT</h3>
          </div>
          <div className="skillCard">
            <h3>TYPESCRIPT</h3>
          </div>
          <div className="skillCard">
            <h3>NEXT</h3>
          </div>
          <div className="skillCard">
            <h3>NODE</h3>
          </div>
          <div className="skillCard">
            <h3>EXPRESS</h3>
          </div>
          <div className="skillCard">
            <h3>FIREBASE</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
