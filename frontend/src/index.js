import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // ✅ This file should now exist
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // ✅ Ensure it's a default import

// Ensure it's called correctly
reportWebVitals(); // ✅ Remove any `_default(...)` wrapping

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
