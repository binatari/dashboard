import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// layouts

import Admin from "./layouts/Admin.js";

ReactDOM.render(
  <React.StrictMode>
    <Admin/>
  </React.StrictMode>,
  document.getElementById("root")
);
