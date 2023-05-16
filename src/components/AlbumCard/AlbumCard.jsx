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

function AlbumCard({ album, handleParentClick }) {
  return (
    <div className="album-card">
      <Card
        style={{
          width: "18rem",
          margin: "1rem",
        }}
      >
        <img alt="" src={album.album.cover_medium} />
        <CardBody style={{ height: "220px" }}>
          <div className="card-info">
            <CardTitle tag="h5" style={{ textAlign: "left" }}>
              {album.album.title}
            </CardTitle>
            <CardText>{album.duration}</CardText>
          </div>
          <div className="card-bottom">
            <Button onClick={() => handleParentClick(album)}>
              Add to Playlist
            </Button>
            <Player song={album.preview} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AlbumCard;
