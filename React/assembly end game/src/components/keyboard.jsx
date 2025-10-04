import '../styles/primary-style.css';
function Keyboard({ setGussedLetter }) {
  function handleClick(event) {
    const clickedLetter = event.target.textContent;
    console.log(clickedLetter);
    setGussedLetter((prev) => [...prev, clickedLetter]);
  }
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const letterElements = letters.map((letter, index) => {
    return (
      <button onClick={handleClick} className="alphabet" key={index}>
        {letter}
      </button>
    );
  });
  return <div>{letterElements}</div>;
}
export default Keyboard;