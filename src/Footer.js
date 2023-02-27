import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        <a
          href="https://github.com/AnnaMyslyva/reactapp"
          target="_blank"
          rel="noreferrer"
          title="Open-source Code"
          id="gitHubLink"
        >
          Open-source Code
        </a>
        {""} was coded by {""}
        <a
          href="https://www.linkedin.com/in/anna-myslyva-a14879162/"
          target="_blank"
          rel="noreferrer"
          title="Open-source Code"
          id="idLink"
        >
          Anna Myslyva
        </a>
        {""} and is hosted {""}
        <a
          href="https://rainbow-vacherin-8563d0.netlify.app"
          target="_blank"
          rel="noreferrer"
          title="Open-source Code"
          id="netifyLink"
        >
          {""}on Netify
        </a>
      </p>
    </footer>
  );
}
