import './styles/primary-style.css';
import React from "react";
import "./styles/input-letter.css";
import StatusSection from "./components/status-section.jsx";
import langEelement from "./components/language.jsx";
import Keyboard from "./components/keyboard.jsx";
function App() {
  const [currentWord, setCurrentWord] = React.useState("react");
  const [gussedLetter, setGussedLetter] = React.useState([]);
  const letters = currentWord.split("");

  const lettersElement = letters.map((letter, index) => {
    const isGussed = gussedLetter.includes(letter);
    return (
      <span className="letter" key={index}>
        {isGussed ? letter : ""}
      </span>
    );
  });

  return (
    <>
      <div className="main-section">
        <div className="header">
          <h1>Assembly: Endgame</h1>
          <p>
            Assembly: Endgame Guess the word in under 8 attempts to keep the
            programming world safe from Assembly!
          </p>
        </div>
        <StatusSection />
        <section className="language">{langEelement}</section>
        <section className="word">{lettersElement}</section>
      </div>

      <section className="keyboard">
        <Keyboard
          gussedLetter={gussedLetter}
          setGussedLetter={setGussedLetter}
          currentWord={currentWord}
        />
      </section>
      <button className="new-game">new game</button>
    </>
  );
}

export default App;