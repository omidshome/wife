import { useState } from "react";
import Player from "./components/Player";

// import FavoriteIcon from "@mui/icons-material/Favorite";
import "./App.css";
import Mermaid from "./assets/mermaid.jpg";
import Mermaid2 from "./assets/mermaid2.jpg";

function App() {
  return (
    <div>
      <div className="box">
        <div className="title">
          <img src={Mermaid2} alt="Mansoureh Abdi" className="shape" />
          <h2>Mansoureh Abdi</h2>
        </div>
        <h5 style={{ fontStyle: "italic" }}>I love you so much my mermaid</h5>
        <h5 style={{ color: "red", fontSize: "2rem" }}>♥</h5>

        <Player />
      </div>
    </div>
  );
}

export default App;
