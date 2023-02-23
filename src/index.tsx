import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const consoleWarn = console.warn;
// const SUPPRESSED_WARNINGS = ["THREE"];

// console.warn = function filterWarnings(msg, ...args) {
//   if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
//     consoleWarn(msg, ...args);
//   }
// };

// console.warn("I'll appear as a warning");
// console.warn("warning text - I will not");

root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <BrowserRouter> */}
      <HashRouter basename="/">
        <App />
      </HashRouter>
      {/* </BrowserRouter> */}
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
