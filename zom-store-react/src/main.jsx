import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {CatalogProvider} from "./context/CatalogContext.jsx";
createRoot(document.getElementById("root")).render(

  <StrictMode>
    <CatalogProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CatalogProvider>
  </StrictMode>
);
