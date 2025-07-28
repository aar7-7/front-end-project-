import React from "react";
export default function Main(){

    const [ingredients , setIngredients] = React.useState([])
    const ingredienstsListItem = ingredients.map(
        ingredient => (<li key={ingredient}>{ingredient} </li>))
    function HandleSubmit(event){
       event.preventDefault();
       const formData = new FormData(event.currentTarget);
       const newIngredient = formData.get("ingredient");
       setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    return(
        <>
        <div className="main">
            <form className="ingredient-form" onSubmit={HandleSubmit}>
                <input type="text" placeholder="e.g Oregano" name="ingredient" />
                <button >Add ingredient</button>
                <ul >{ingredienstsListItem}</ul>
            </form>
        </div>
        </>
    );
}