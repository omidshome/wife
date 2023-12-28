import { useState } from "react";
import Player from "./components/Player";

// import FavoriteIcon from "@mui/icons-material/Favorite";
import "./App.css";
import Mermaid from "./assets/mermaid.jpg";
import Mermaid2 from "./assets/mermaid2.jpg";
import Mermaid3 from "./assets/mermaid3.jpg";

function App() {
  const [theImage, setTheImage] = useState(Mermaid);
  const listOfImages = [Mermaid, Mermaid2, Mermaid3];
  function slidImages() {
    const currentImageIndex = listOfImages.indexOf(theImage);
    const nextImageIndex = (currentImageIndex + 1) % listOfImages.length;
    setTheImage(listOfImages[nextImageIndex]);
  }

  return (
    <div>
      <div className="box">
        <div className="title">
          <img
            src={theImage}
            alt="Mansoureh Abdi"
            className="shape fade-in"
            onClick={slidImages}
          />
          <h2>Mansoureh Abdi</h2>
        </div>
        <h3 style={{ fontStyle: "italic", marginTop: "2rem" }}>
          I love you so much my mermaid
        </h3>

        <h3>Your husband,</h3>
        <h3>Omid</h3>
        <h5 style={{ color: "red", fontSize: "2rem" }}>♥</h5>

        <Player />
      </div>
    </div>
  );
}

export default App;
