import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddSong = () => {
  const [song, setSong] = useState({
    song_name: "",
    length: "",
    artist_id: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSong((prevSong) => {
      return {
        ...prevSong,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ song });
    fetch("http://localhost:9292/songs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...song,
        artist_id: +song.artist_id,
      }),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log({ response });
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="song_name">
        <Form.Label>Song name</Form.Label>
        <Form.Control
          type="text"
          name="song_name"
          value={song.song_name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Song Length</Form.Label>
        <Form.Control
          type="text"
          name="length"
          value={song.length}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Artist Id</Form.Label>
        <Form.Control
          type="text"
          name="artist_id"
          value={song.artist_id}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddSong;
