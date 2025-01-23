import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/character-ratings.css";
import "./styles/character-cards.css";
import { FunctionalMainComponent } from "./Components/FunctionalMainComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FunctionalMainComponent />
  </StrictMode>
);
