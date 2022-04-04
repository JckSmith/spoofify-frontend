import React from "react";

function ArtistCard({ artist: { id, artist_name, genre } }) {
  return (
    <div>
      Artist Name: {artist_name}, Genre: {genre}, Id: {id}
    </div>
  );
}

export default ArtistCard;
