import NavBar from '/src/NavBar/NavBar.jsx'
import Header from '/src/Header/Header.jsx'

function RecipesPage({children}) {
  let recipesFound = ["Money", "Cash", "Bread"]

  

  return (
    <>
      <NavBar />
      <Header>{children} Recipes</Header>
      <button className='button-country'>Learn about {children}</button>

    </>
  );
}

export default RecipesPage;