import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😘": "kissing",
  "😂": "laughing",
  "😎": "vibing",
  "😔": "sad",
  "😠": "angry"
};

export default function App() {
  var [emojiMeaning, setMeaning] = useState("");
  var emojiWeKnow = Object.keys(emojiDictionary);

  function emojiHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We dont have this in our database";
    }
    setMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1> Inside Outtt!! </h1>
      <input onChange={emojiHandler} />
      <h1>{emojiMeaning}</h1>

      <h3> emoji we know </h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
