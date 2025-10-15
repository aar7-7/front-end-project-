import './styles/primary-style.css';
import React from "react";
import "./styles/input-letter.css";
import StatusSection from "./components/status-section.jsx";
import Language from "./components/language.jsx";
import Keyboard from "./components/keyboard.jsx";
function App() {
  const [currentWord, setCurrentWord] = React.useState("react");
  const [gussedLetter, setGussedLetter] = React.useState([]);
  const [lostLanguage, setLostLanguage] = React.useState([]);
  const letters = currentWord.split("");
  const isGameOver = lostLanguage.length >= 8;
  const isGameWon = letters.every((letter) => gussedLetter.includes(letter));

  React.useEffect(() => {
    console.log(isGameWon);
    // if (isGameOver) {
    //   alert("Game Over! You've lost all languages.");
    //   return;
    // }
    // if (isGameWon) {
    //   alert("Congratulations! You've guessed the word.");
    //   return;
    // }
    if (gussedLetter.length === 0) return;

    const lastGuessed = gussedLetter[gussedLetter.length - 1];
    if (!currentWord.includes(lastGuessed)) {
      setLostLanguage((prev) => {
        const nextId = prev.length + 1;
        return [...prev, nextId];
      });
    }
  }, [gussedLetter, currentWord]);
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
            programming world safe from Assembly! hint - react
          </p>
        </div>
        <StatusSection isGameOver={isGameOver} isGameWon={isGameWon} />
        <section className="language">
          <Language lostLanguage={lostLanguage} />
        </section>
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