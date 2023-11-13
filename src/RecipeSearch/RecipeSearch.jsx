function RecipeSearch() {
  return (
    <div>
      <h4>Find Recipes By Country</h4>
      <div>
        <input type="search" name="q"></input>
        <button>Find Recipes</button>
      </div>
      <button>Choose Country For me!</button>
    </div>
  );
}

export default RecipeSearch;