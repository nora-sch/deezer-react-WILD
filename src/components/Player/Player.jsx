import { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { FaDeezer } from "react-icons/fa";
import "./Player.css";

function Player({ song }) {
  return (
    <div className="player-wrapper" style={{display:"flex", alignContent:"flex-end"}}>
      <audio controls className="play hidden" name={song}>
        <source src={song} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Player;
