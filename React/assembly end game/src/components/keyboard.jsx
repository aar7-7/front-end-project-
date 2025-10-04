import '../styles/primary-style.css';
function Keyboard({ gussedLetter, setGussedLetter, currentWord }) {
  const trueGussedStyle = {
    backgroundColor: "#10A95B",
  };
  const wrongGussedStyle = {
    backgroundColor: "#EC5D49",
  };
  function handleClick(event) {
    const clickedLetter = event.target.textContent;
    console.log(clickedLetter);
    setGussedLetter((prev) =>
      prev.includes(clickedLetter) ? prev : [...prev, clickedLetter]
    );
  }
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const letterElements = letters.map((letter, index) => {
    const isGussed = gussedLetter.includes(letter);
    const isCorrect = currentWord.includes(letter);
    let style = {};
    if (isGussed) {
      style = isCorrect ? trueGussedStyle : wrongGussedStyle;
    }
    return (
      <button
        onClick={handleClick}
        className="alphabet"
        key={index}
        style={style}
      >
        {letter}
      </button>
    );
  });
  return <div>{letterElements}</div>;
}
export default Keyboard;