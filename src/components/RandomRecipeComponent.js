import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomRecipe } from '../store/recipes/actions';

const RandomRecipeComponent = () => {

  const dispatch = useDispatch();
  const {recipe, loadingRecipe} = useSelector((state)=> state.RecipeReducer)
  useEffect(()=> {
    dispatch(getRandomRecipe())
  }, [])

  return (
    <div>
    <h3>{recipe.title}</h3>
    <img src={recipe.image} alt={recipe.title} />
    <p>{recipe.readyInMinutes} minutes</p>
    {recipe.vegetarian ? <p>vegetarian</p> : ""}
    {recipe.vegan ? <p>vegan</p> : ""}
    {recipe.glutenFree ? <p>gluten free</p> : ""}
    </div>
  )
}

export default RandomRecipeComponent