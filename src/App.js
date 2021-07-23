import "./styles.css";
import React, { useState } from "react";

const flagDictionary = {
  "🇦🇫": "Afghanistan",
  "🇧🇪": "Belgium",
  "🇨🇦": "Canada",
  "🇩🇪": "Germany",
  "🇪🇸": "Spain",
  "🇮🇳": "India"
};

var flagArray = Object.keys(flagDictionary);

export default function App() {
  const [flag, setFlag] = useState("");

  function listInputHandler(event) {
    var userInput = event.target.value;
    var answer = flagDictionary[userInput];

    if (answer === undefined) answer = "This flag is not in our database";

    setFlag(answer);
  }

  function listClickHandler(item) {
    var answer = flagDictionary[item];
    setFlag(answer);
  }

  return (
    <div className="App">
      <h1 style={{ padding: "1rem" }}>Flag Interpreter</h1>

      <input
        onChange={listInputHandler}
        placeholder={"Enter any flag here to know the meaning"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h3 style={{ paddingTop: "1rem" }}>{flag}</h3>
      <h3 style={{ padding: "1rem" }}>The flags which we know</h3>
      {flagArray.map((item) => {
        return (
          <span
            key={item}
            style={{
              padding: "1rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
            onClick={() => listClickHandler(item)}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
