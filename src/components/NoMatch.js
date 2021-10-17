import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div style={{ textAlign: "center" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <div>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </div>
    </div>
  );
}

export default NoMatch;
