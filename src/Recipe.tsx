import React from 'react'
import { IRecipeListProps } from './types'

//recipe data
const Recipe : React.FC<IRecipeProps> = ({ recipeData }) => {
    console.log("recipe data sigle:",recipeData);



  return (
    <div>
        <h3>{recipeData.name}</h3>
        <p><strong>Ingrediences</strong></p>

        //get the ingredience from view-array and display the details in un-ordered array
        <ul>
            {recipeData.ingredients.map(i =>(
                <li key={i}>{i}</li>
            ))}
        </ul>

        //get the instructions to a ordered array
        <ul>
            {recipeData.instructions.map(instruction => (
                <li key={instruction}>{instruction}</li>
            ))}
        </ul>
    </div>
  )
}

export default Recipe;
