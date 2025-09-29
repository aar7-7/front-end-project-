import Die from "./components/die.jsx";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice());
  const tenziesCompleted = React.useRef();

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);
  if (gameWon) {
    console.log("You won!");
  }
  React.useEffect(() => {
    if (gameWon && tenziesCompleted.current) {
      tenziesCompleted.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    const diceArr = [];
    for (var i = 1; i <= 10; i++) {
      const randNum = Math.floor(Math.random() * 6) + 1;
      diceArr.push({ value: randNum, isHeld: false, id: nanoid() });
    }
    return diceArr;
  }
  const diceElement = dice.map((dieObj) => {
    return (
      <Die
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => hold(dieObj.id)}
      />
    );
  });
  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld
            ? die
            : { ...die, value: Math.floor(Math.random() * 6) + 1 }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }
  function hold(id) {
    const clickedDie = dice.find((die) => die.id === id);
    const targetValue = clickedDie.value;
    const shouldHold = !clickedDie.isHeld;
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: shouldHold } : die
      )
    );
  }

  return (
    <>
      {gameWon && <Confetti />}
      <div className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="game-container">{diceElement}</div>
        <button ref={tenziesCompleted} className="roll-dice" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </>
  );
}

export default App;
