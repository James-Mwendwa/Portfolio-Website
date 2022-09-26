import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/skills">
        <a>SKILLS</a>
      </Link>
      <Link href="/works">
        <a>PORTFOLIO</a>
      </Link>
      <Link href="/contact">
        <a>CONTACTS</a>
      </Link>
    </div>
  );
}

export default Navbar;
