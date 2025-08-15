import React from "react";
import CludeRecipe from "./cludeRecipe";
import IngredientsList from "./ingredientsList";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  function flipResipeShown() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  return (
    <>
      <div className="main">
        <form className="ingredient-form" action={addIngredient}>
          <input type="text" placeholder="e.g Oregano" name="ingredient" />
          <button>Add ingredient</button>
        </form>
        {ingredients.length > 0 ? (
          <IngredientsList
            ingredients={ingredients}
            flipResipeShown={flipResipeShown}
          />
        ) : null}
        {recipeShown ? <CludeRecipe /> : null}
      </div>
    </>
  );
}