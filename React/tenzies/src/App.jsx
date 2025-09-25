import Die from "./components/die.jsx";
import React from "react";
import { nanoid } from "nanoid";
function App() {
  const [dice, setDice] = React.useState(generateAllNewDice());
  function generateAllNewDice() {
    const diceArr = [];
    for (var i = 1; i <= 10; i++) {
      const randNum = Math.floor(Math.random() * 6) + 1;
      diceArr.push({ vlue: randNum, isHeld: true, id: nanoid() });
    }
    return diceArr;
  }
  const diceElement = dice.map((dieObj) => {
    return <Die key={dieObj.id} value={dieObj.vlue} isHeld={dieObj.isHeld} />;
  });
  function rollDice() {
    setDice(generateAllNewDice());
  }

  return (
    <>
      <div className="main">
        <div className="game-container">{diceElement}</div>{" "}
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </div>
    </>
  );
}

export default App;
