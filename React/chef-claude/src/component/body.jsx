import React from "react";
import CludeRecipe from "./cludeRecipe";
import IngredientsList from "./ingredientsList";
import { getRecipeFromMistral } from "../ai";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  const recipeSection = React.useRef();
  React.useEffect(() => {
    if (recipe !== "" && recipeSection !== null) {
      recipeSection.current.scrollIntoView();
    }
  }, [recipe]);
  async function getRecipe() {
    const recipe = await getRecipeFromMistral(ingredients);
    setRecipe(recipe);
    console.log(recipe);
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
            ref={recipeSection}
            ingredients={ingredients}
            getRecipe={getRecipe}
          />
        ) : null}
        {recipe ? <CludeRecipe recipe={recipe} /> : null}
      </div>
    </>
  );
}
