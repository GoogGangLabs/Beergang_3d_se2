import { ImageProvider } from "context/ImageContext";
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

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ImageProvider>
        {/* <BrowserRouter> */}
        <HashRouter basename="/">
          <App />
        </HashRouter>
        {/* </BrowserRouter> */}
      </ImageProvider>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
