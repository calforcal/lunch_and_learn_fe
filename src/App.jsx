import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import NavBar from './NavBar/NavBar.jsx';
import RecipesPage from './Pages/RecipesPage/RecipesPage.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<RecipesPage>Thai</RecipesPage>} />
      </Routes>
    </>
  )
}

export default App;
