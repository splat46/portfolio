import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <Navigation />
      <div className="header__content">
        <h2>
          Designer & Front-end developer<br></br>{" "}
          <small>
            I design and code beautifully things, and I love what I do.
          </small>
        </h2>
      </div>
      <svg
        className="shape-fill-white"
        preserveAspectRatio="none"
        viewBox="0 0 1000 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z"></path>
      </svg>
    </header>
  );
}
