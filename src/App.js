import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import SearchIcon from '@material-ui/icons/Search';

const App=()=>{

  const app_id="9ff47248";
  const app_key="9ffcee802427ab245e0a5d14aadca4b1";
  const example_req=`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`;
  
  const[recipes, setRecipes]=useState([]);
  const[search, setSearch]=useState("");
  const[query, setQuery]=useState('chicken');

  useEffect(()=>{
    getRecipe();
  },[query]);

  const getRecipe=async()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
    const data=await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="main">

      <div className="nav">
        <h3>All recipes🥄</h3>
      </div>
      <div>
          <form onSubmit={getSearch} className="search_form">
            <SearchIcon className="icon_search" />
            <input placeholder="SearchRecipe" className="search_bar" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            <button type="submit" className="search_button">Search</button>
          </form>

          <div className="body_part" >
            <p className="recommendation" >Today's Recommendation</p>
            <div className="items">
              {recipes.map((recipe)=>(
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label} 
                  calories={recipe.recipe.calories} 
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients} 
                />
              ))
            }
            </div>
          </div>
      
      </div>
    </div>
  );
}

export default App;
