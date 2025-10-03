import '../styles/language.css';
import '../assets/language.js'
import { languages } from '../assets/language.js';
function Language(props){
    return(
        <div className="language" style={{ backgroundColor: props.color }}>
            {props.lanName}
        </div>
    );
}
const langEelement = languages.map((language) => {
  return (
    <Language
      lanName={language.name}
      color={language.backgroundColor}
      key={language.name}
    />
  );
});

export default langEelement;