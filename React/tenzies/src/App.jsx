import Die from "./components/die.jsx";
import React from "react";
import { nanoid } from "nanoid";
function App() {
  const [dice, setDice] = React.useState(generateAllNewDice());
  const allHeld = dice.every((die) => die.isHeld);
  const firstValue = dice[0].value;
  const allSameValue = dice.every((die) => die.value === firstValue);
  if (allHeld && allSameValue) {
    alert("You won!");
  }
  
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
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
      )
    );
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
      <div className="main">
        <div className="game-container">{diceElement}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </div>
    </>
  );
}

export default App;
