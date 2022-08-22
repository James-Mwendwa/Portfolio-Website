import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homepage">
        <h2>
          Hello, my name is <br></br>James Mwendwa <br></br>I'm a Frontend
          Developer{" "}
        </h2>
        <button>Hire Me</button>
      </div>
      <div className="image">
        <img src="/images/image2.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
