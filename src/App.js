import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ArtistContainer from "./components/ArtistContainer";
import SongContainer from "./components/SongContainer";
import AddSong from "./components/AddSong";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  console.log(songs);

  useEffect(() => {
    fetch("http://localhost:9292/artists")
      .then((r) => r.json())
      .then((response) => {
        console.log({ response });
        setArtists(response);
      });
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/artists" />} />
          <Route
            path="/artists"
            element={<ArtistContainer artists={artists} />}
          />
          <Route path="/artists/:id/songs" element={<SongContainer />} />
          <Route path="/addsongs" element={<AddSong />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
