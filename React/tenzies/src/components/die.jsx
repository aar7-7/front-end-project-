import {} from "../style/die.css"
export default function Die(props){
    return(
        <button className="die-face">
            {props.value}
        </button>
    )
}