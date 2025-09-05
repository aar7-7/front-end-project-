export default function IngredientsList(props){
    const ingredienstsListItem = props.ingredients.map((ingredient) => (
      <li key={ingredient}>{ingredient} </li>
    ));
    return (
      <div className="ingredients-on-hand">
        <h2>ingredients on hand:</h2>
        <ul>{ingredienstsListItem}</ul>
        {props.ingredients.length > 3 ? (
          <div className="get-recipe-suggestion">
            <div ref={props.ref}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        ) : null}
      </div>
    );
}