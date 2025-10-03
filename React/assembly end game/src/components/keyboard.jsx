import '../styles/primary-style.css';
function Keyboard() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const letterElements = letters.map((letter, index) => {
    return (
      <button className="alphabet" key={index}>
        {letter}
      </button>
    );
  });
  return <div >{letterElements}</div>;
}
export default Keyboard;