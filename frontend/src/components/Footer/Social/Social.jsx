import React from "react";
import { Instagram, Linkedin, Twitter } from "react-feather";
import Styles from "./style";

export default function Social() {
  return (
    <Styles>
      <div>
        <ul className="soc-content">
          <a
            href="https://www.linkedin.com/company/externatic/?originalSubdomain=fr"
            target="_blank"
            rel="noreferrer"
            className="hover"
          >
            <li>
              <Linkedin />
            </li>
          </a>
          <a
            href="https://twitter.com/Externatic"
            target="_blank"
            rel="noreferrer"
            className="hover"
          >
            <li>
              <Twitter />
            </li>
          </a>
          <a
            href="https://www.instagram.com/externatic/"
            target="_blank"
            rel="noreferrer"
            className="hover"
          >
            <li>
              <Instagram />
            </li>
          </a>
        </ul>
      </div>
    </Styles>
  );
}
