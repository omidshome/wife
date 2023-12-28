import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SongFile from "../assets/Behnam.mp3";

function Player() {
  const [audio] = useState(new Audio(SongFile));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Clean up audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const playSong = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <Button variant="contained" onClick={playSong}>
        {isPlaying ? "Stop" : "Play for Mansoureh"}
      </Button>
    </div>
  );
}

export default Player;
