import NavBar from '/src/NavBar/NavBar.jsx';
import Header from '/src/Header/Header.jsx';
import RecipeSearch from '/src/RecipeSearch/RecipeSearch.jsx';

function Home() {
  let headerContent = "Lunch and Learn"
  return (
    <div>
      <Header>{headerContent}</Header>
      <div>
        <RecipeSearch />
      </div>
    </div>
  );
};

export default Home;