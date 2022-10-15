import React from "react";

function Footer() {
  const style = {
    display: "grid",
    placeContent: "center",
    bottom: 0,
    color: "white",
    marginTop: "30px",
  };
  return (
    <div style={style}>
      <p>copyright 2022</p>
    </div>
  );
}

export default Footer;
