import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/buttons.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Import the registration helper
import * as serviceWorkerRegistration from "./serviceworkerRegistration";
// ✅ Register the service worker for PWA
serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
