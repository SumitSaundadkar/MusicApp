import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./MusicApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
