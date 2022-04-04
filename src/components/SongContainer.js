import React, { useState, useEffect } from "react";
import SongCard from "./SongCard";
import { useParams } from "react-router-dom";

function SongContainer() {
  const { id } = useParams();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/songs")
      .then((res) => res.json())
      .then((result) => {
        setSongs(result.filter((song) => song.artist_id === +id));
        console.log({
          result: result.filter((song) => song.artist_id === +id),
        });
      });
  }, []);

  const artistCards = songs.map((song) => (
    <SongCard key={song.id} song={song} />
  ));

  return (
    <main>
      <ul className="songs">
        {songs.map((song, index) => (
          <li key={index}>
            <SongCard key={song.id} song={song} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default SongContainer;
