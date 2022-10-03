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
var emojiWeHave = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");

  function userEmoji(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning =
        "Opps!!! " + userInput + " emoji is not available in our database";
    }
    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1> emoji stories !!!</h1>
      <input onChange={userEmoji} />
      <h3> {emojiMeaning} </h3>

      <h3>emojis we know</h3>
      {emojiWeHave.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
