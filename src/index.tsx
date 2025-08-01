import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
// Application entry point with strict mode and theme context
root.render(
  <React.StrictMode>
    {/* Wrap app with theme provider for global theme access */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
