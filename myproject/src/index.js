import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Fonts from "@assets/fonts/Fonts";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider>
    <BrowserRouter>
      <Fonts />
      <App />
    </BrowserRouter>
  </Provider>
);