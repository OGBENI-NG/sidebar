import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import './index.css'
import { ThemeProvider } from "./src/components/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)