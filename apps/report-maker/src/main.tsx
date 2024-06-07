import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import "./css/auth.css";
import "./css/card_styles.css";
import "./css/carousel.css";
import "./css/headers.css";
import "./css/insert_card.css";
import "./css/report_table.css";
import "./css/template_repo.css";
import "./css/server_setting.css";
import "./css/repo-txn.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
