import React from "react";
export default function Main(){

    const [ingredients , setIngredients] = React.useState([])
    const ingredienstsListItem = ingredients.map(
        ingredient => (<li key={ingredient}>{ingredient} </li>))
    function addIngredient(formData) {
      const newIngredient = formData.get("ingredient");
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    return (
      <>
        <div className="main">
          <form className="ingredient-form" action={addIngredient}>
            <input type="text" placeholder="e.g Oregano" name="ingredient" />
            <button>Add ingredient</button>
          </form>

          <div className="ingredients-on-hand">
            <h2>ingredients on hand:</h2>
            <ul>{ingredienstsListItem}</ul>
            <div className="get-recipe-suggestion">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          </div>
        </div>
      </>
    );
}