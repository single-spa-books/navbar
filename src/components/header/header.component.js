import React from "react";
import { navigateToUrl } from "single-spa";

import "./header.component.css";
import githubIcon from "../../assets/icon-github.svg";

export default function Root(props) {
  return (
    <header className="header">
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigateToUrl("/");
        }}
      >
        <h1>Single-SPA Books</h1>
      </a>

      <a href="https://github.com/single-spa-books" target="_blank">
        <img src={githubIcon} alt="Icon github" />
      </a>
    </header>
  );
}
