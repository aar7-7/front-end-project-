import Die from "./components/die.jsx";
function App() {
  return (
    <>
      <div className="main">
        <div className="game-container">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
        </div>
      </div>
    </>
  );
}

export default App;
