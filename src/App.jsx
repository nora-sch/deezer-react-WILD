import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AlbumCard from "./components/AlbumCard/AlbumCard";
import Navbar from "./components/Navbar/Navbar";
import { data } from "./data/data";

import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const getAndSetSong = (album) => {
    !playlist.includes(album)?setPlaylist([...playlist, album]):setPlaylist(currentPlaylist => currentPlaylist.filter(song => song !== album));;
  };
  const deletePlaylist = () => {
    setPlaylist([]);
  };
  const deleteOneByOne = (songToDelete) => {

setPlaylist(currentPlaylist => currentPlaylist.filter(song => song !== songToDelete));
console.log(playlist);
  }

  return (
    <div className="body">
      <div className="header">
        <Navbar playlist={playlist} deletePlaylist={deletePlaylist} deleteOneByOne = {deleteOneByOne}/>
      </div>
      <div className="main">
        {data.map((album, i) => (
          <AlbumCard
            key={i + "-" + album.album.title}
            album={album}
            handleParentClick={getAndSetSong}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
