import React from 'react';
import './Recipe.css';

const Recipe=({title, calories, image, ingredients})=>{
    return(
        <div className="dish" >
            <h1 className="title" >{title}</h1>
            <p>{calories}</p>

            <img className="image" src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
        </div>
    );
};

export default Recipe;