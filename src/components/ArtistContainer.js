import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import { Link } from "react-router-dom";

function ArtistContainer({ artists }) {
  return (
    <main>
      <h1>Spoofify!</h1>
      <h2>Artists</h2>
      <ul className="artists">
        {artists.map((artist, id) => (
          <Link to={`${artist.id}/songs`} key={id}>
            <li>
              <ArtistCard key={artist.id} artist={artist} />{" "}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default ArtistContainer;
