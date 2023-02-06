import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

function MyRecipes({ currentUser }) {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data.filter(recipe => recipe.user_id === currentUser.id)))
  }, [currentUser.id])

  const eachRecipe = () => {
    return recipes.map(recipe =>
      <RecipeCard recipe={recipe} key={recipe.id}/>
    )
  }

  return(
    <div>
      <h1>My Recipes</h1>
      {eachRecipe()}
    </div>
  )
}

export default MyRecipes