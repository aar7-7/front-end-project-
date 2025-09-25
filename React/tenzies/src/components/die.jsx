import {} from "../style/die.css"
export default function Die(props){
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button style={styles} className="die-face">
      {props.value}
    </button>
  );
}