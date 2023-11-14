import "./RecipeSearch.css"

function RecipeSearch() {
  return (
    <div className="searchBox">
      <h4>Find Recipes By Country</h4>
      <div>
        <input className="search-bar" type="search" name="q"></input>
        <button className="search-button">Find Recipes</button>
      </div>
      <button className="search-random">Choose Country For me!</button>
    </div>
  );
}

export default RecipeSearch;