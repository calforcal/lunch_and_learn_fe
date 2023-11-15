import "./RecipeSearch.css"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function RecipeSearch() {
  let navigate = useNavigate()

  // const [recipesFound, setRecipesFound] = useState();
  const routeChange = (value) => {
    navigate('/recipes', { state: value })
  };

  return (
    <div className="searchBox">
      <h4>Find Recipes By Country</h4>
      <form>
        <input id="recipe-search-bar" type="text"></input>
        <button className="search-button" onClick={() => routeChange(document.querySelector('#recipe-search-bar').value)}>Find Recipes</button>
      </form>
      <button className="search-random" onClick={() => routeChange('')}>Choose Country For me!</button>
    </div>
  );
}

export default RecipeSearch;