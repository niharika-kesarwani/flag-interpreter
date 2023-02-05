import "./styles.css";
import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const flagDictionary = {
  "🇦🇫": "Afghanistan",
  "🇧🇪": "Belgium",
  "🇨🇦": "Canada",
  "🇩🇪": "Germany",
  "🇭🇺": "Hungary",
  "🇮🇳": "India",
  "🇯🇵": "Japan",
  "🇰🇷": "South Korea",
  "🇱🇾": "Libya",
  "🇲🇻": "Maldives",
  "🇳🇵": "Nepal",
  "🇴🇲": "Oman",
  "🇵🇰": "Pakistan",
  "🇶🇦": "Qatar",
  "🇷🇺": "Russia",
  "🇪🇸": "Spain",
  "🇸🇬": "Singapore",
  "🇹🇷": "Turkey",
  "🇺🇾": "Uruguay",
  "🇻🇳": "Vietnam",
  "🇾🇪": "Yemen",
  "🇿🇼": "Zimbabwe"
};

var flagArray = Object.keys(flagDictionary);

export default function App() {
  const [flag, setFlag] = useState("");

  function listInputHandler(event) {
    var userInput = event.target.value;
    var answer = flagDictionary[userInput];

    if (answer === undefined && userInput !== "") {
      setFlag("This flag is not in our database 😔");
    } else {
      setFlag(answer);
    }
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
      <h2 style={{ padding: "1rem" }}>The flags which we know</h2>
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
      <footer className="footer">
        <div className="footer-header">connect with me</div>
        <ul className="footer-ul-links">
          <li className="lists-item-inline">
            <a
              className="footer-links"
              href="https://linkedin.com/in/niharika-kesarwani"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icons" icon={["fab", "linkedin"]} />
              LinkedIn
            </a>
          </li>
          <li className="lists-item-inline">
            <a
              className="footer-links"
              href="https://github.com/NiharikaNeha"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icons" icon={["fab", "github"]} />
              GitHub
            </a>
          </li>
          <li className="lists-item-inline">
            <a
              className="footer-links"
              href="https://twitter.com/Niharika_twt"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icons" icon={["fab", "twitter"]} />
              Twitter
            </a>
          </li>
          <li className="lists-item-inline">
            <a
              className="footer-links"
              href="https://niharikakesarwani.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="icons" icon={["fab", "dribbble"]} />
              Website
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
