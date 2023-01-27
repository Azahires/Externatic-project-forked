import React from "react";
import Styles from "./style";

export default function Infos() {
  return (
    <Styles>
      <div className="info-content">
        <ul>
          <a href="https://www.externatic.fr/metiers/ " rel="noreferrer">
            <li>Fiches Métiers</li>
          </a>
          <a
            href="
            https://www.externatic.fr/mentions-legales/"
            rel="noreferrer"
          >
            <li>Mentions Légales</li>
          </a>

          <a
            href="https://www.externatic.fr/politique-de-confidentialite/"
            rel="noreferrer"
          >
            <li>Politique de confidentialité</li>
          </a>
          <a
            href="https://www.externatic.fr/politique-de-cookies/"
            rel="noreferrer"
          >
            <li>Politique de cookies</li>
          </a>

          <a
            href="https://www.externatic.fr/sitemap_index.xml"
            rel="noreferrer"
          >
            <li>Plan du site</li>
          </a>
        </ul>
      </div>
    </Styles>
  );
}
