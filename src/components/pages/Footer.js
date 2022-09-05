import React from "react";
import { ExternalLink } from "react-external-link";

export default function Footer() {
  const footer = {
    textAlign: "center",
    backgroundColor: "rgb(243, 238, 235",
    padding: "5px",
    fontSize: "18px",
    color: "black",
    width: "100%",
    marginTop: "10px",
  };

  return (
    <div style={footer}>
      <p>
        <b>Author: Rishi Sharma</b> <br />
        <b>Follow Me:</b>&nbsp;&nbsp;
        <ExternalLink href="https://github.com/RishiRamSharma">
          <i className="fab fa-github icon" />
        </ExternalLink>
        &nbsp;&nbsp;&nbsp;
        <ExternalLink href="https://www.linkedin.com/in/rishi-sharma-0856851a8">
          <i className="fab fa-linkedin-in icon" />
        </ExternalLink>
        <br />
        <b>Email Me:</b>&nbsp;&nbsp;
        <a href="mailto:rishiram86075@gmail.com">rishiram86075@gmail.com</a>
      </p>
    </div>
  );
}
