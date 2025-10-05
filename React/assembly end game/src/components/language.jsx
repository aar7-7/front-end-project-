import "../styles/language.css";
import { languages } from "../assets/language.js";
function Language({ lostLanguage }) {
  const langEelement = languages.map((language) => {
    const isLost = lostLanguage.includes(language.id);
    return (
      <div
        className={`language${isLost ? "-lost" : ""}`}
        style={{ backgroundColor: language.backgroundColor }}
        key={language.id}
      >
        {language.name}
      </div>
    );
  });
  return <div className="language-container">{langEelement}</div>;
}

export default Language;
