import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar/NavBar.jsx';
import Header from './Header/Header.jsx';
import RecipeSearch from './RecipeSearch/RecipeSearch.jsx';

function App() {
  let headerContent = "Lunch and Learn"
  return (
    <>
      <div>
        <NavBar />
        <Header>{headerContent}</Header>
        <div>
          <RecipeSearch />
        </div>
      </div>
    </>
  )
}

export default App;
