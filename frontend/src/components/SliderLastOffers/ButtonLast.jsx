import React from "react";
import { Link } from "react-router-dom";
import Styles from "./ButtonLastStyle";

function ButtonLast() {
  return (
    <Styles>
      <Link to="/offers">
        <div className="flex-container">
          <button type="button" className="Button-1">
            <span>Voir toutes nos offres</span>
          </button>
        </div>
      </Link>
    </Styles>
  );
}

export default ButtonLast;
