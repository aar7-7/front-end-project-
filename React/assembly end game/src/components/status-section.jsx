export default function StatusSection(props){
    let message;
    let style;
    if (props.isGameOver) {
      style = { backgroundColor: "red" };
      message = "Game is over! you lose! better start learning assembly";
    } else if (props.isGameWon) {
      style = { backgroundColor: "green" };
      message = "You win! well done";
    } else {
      style = { display: "none" };
    }
    return (
      <div className="status" style={style}>
        <h2>{message}</h2>
      </div>
    );
}