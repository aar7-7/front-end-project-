import './styles/primary-style.css';
import StatusSection from "./components/status-section.jsx";
import element from "./components/language.jsx";
function App() {
  return (
    <div className="header">
      <h1>Assembly: Endgame</h1>
      <p>
        Assembly: Endgame Guess the word in under 8 attempts to keep the
        programming world safe from Assembly!
      </p>
      <StatusSection />
      <section className="language">{element}</section>
    </div>
  );
}

export default App;