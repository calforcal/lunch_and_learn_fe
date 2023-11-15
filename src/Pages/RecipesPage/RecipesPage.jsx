import './RecipePage.css'
import NavBar from '/src/NavBar/NavBar.jsx'
import Header from '/src/Header/Header.jsx'
import RecipeBox from '/src/RecipeBox/RecipeBox.jsx'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

function RecipesPage() {
  const location = useLocation();
  const [recipesFound, setRecipesFound] = useState()
  let country = location.state

  const createRecipe = (data) => {
    const Recipe = {
      country: data.country,
      imageUrl: data.image_url,
      title: data.title,
      url: data.url,
    }
    return Recipe;
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/recipes?country=${location.state}`)
      .then(response => response.json())
      .then(data => {
        let recipeObjects = data.data.map((element) => {
          return createRecipe(element.attributes)
        });
        setRecipesFound(recipeObjects)
      })
      .catch(err => console.log(err));
  }, []);

  console.log(recipesFound)


  return (
    <>
      {recipesFound && 
        <>
          <Header>{recipesFound[0].country} Recipes</Header>
          <button className='button-country'>Learn about {recipesFound[0].country}</button>
          <div className='recipe-boxes'>
            {recipesFound.map((recipe) => (
                <RecipeBox {...recipe} />
            ))
            }
          </div>
        </>  
      }
    </>
  );
}

export default RecipesPage;