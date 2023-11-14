import "./RecipeSearch.css"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function RecipeSearch() {
  let navigate = useNavigate()
  const routeChange = (path) => {
      navigate(path)
  };

  return (
    <div className="searchBox">
      <h4>Find Recipes By Country</h4>
      <div>
        <input className="search-bar" type="search" name="q"></input>
        <button className="search-button" onClick={() => routeChange('/recipes')}>Find Recipes</button>
      </div>
      <button className="search-random">Choose Country For me!</button>
    </div>
  );
}

export default RecipeSearch;