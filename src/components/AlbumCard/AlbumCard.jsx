import { useState } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  Button,
} from "reactstrap";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { FaDeezer } from "react-icons/fa";
import "./AlbumCard.css";
import Player from "../Player/Player";

function AlbumCard({ album, handleParentClick, isClicked }) {
  return (
    <div className="album-card">
      <Card
        style={{
          width: "18rem",
          margin: "1rem",
        }}
      >
        <img alt="" src={album.album.cover_medium} />
        <CardBody style={{ height: "260px" }}>
          <div className="card-info">
            <CardTitle tag="h5" style={{ textAlign: "left", fontSize: "1.15rem" }}>
              {album.title}
            </CardTitle>

            <CardText>{album.duration}</CardText>
          </div>
          <CardText>{album.album.title}</CardText>
          <div className="card-bottom">
            <Button
              onClick={() => handleParentClick(album)}
              style={{ backgroundColor: isClicked ? "red" : "" }}
            >
              {!isClicked ? "Add to Playlist" : "Remove from Playlist"}
            </Button>
            <Player song={album.preview} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AlbumCard;
