import React from "react";
import { Button } from "react-bootstrap";

function SongCard({ song: { id, song_name, length } }) {
  const handleDelete = () => {
    fetch(`http://localhost:9292/songs/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((response) => {
        console.log({ response });
      });
  };
  return (
    <>
      {song_name} {length} {""}
      <Button variant="primary" className="delete-btn" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}

export default SongCard;
