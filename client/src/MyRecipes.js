import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

function MyRecipes({ currentUser }) {
  const [recipes, setRecipes] = useState([])
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(recipes => setRecipes(recipes.filter(recipe => recipe.user_id === currentUser.id)))
  }, [currentUser.id, recipes])

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }

  const handleDeleteRecipe = (recipeToDelete) => {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeToDelete.id))
  }

  const filterRecipes = () => {
    return recipes.filter(recipe => {
      if (filter === "All") {
        return true
      } else {
        return recipe.cuisine === filter
      }
    })
  }

  const eachRecipe = () => {
    return filterRecipes().map(recipe =>
      <RecipeCard recipe={recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe}/>
    )
  }

  const addRecipe = (e) => {
    e.preventDefault()
    fetch('/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        link: link,
        image: image,
        cuisine: cuisine,
        status: "new",
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(handleAddRecipe)
    setName("")
    setLink("")
    setImage("")
    setCuisine("")
    e.target.reset()
  }

  return(
    <div>
      <h1>My Recipes</h1>
      <form onSubmit={addRecipe}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
        <input type="text" placeholder="Link URL" value={link} onChange={e => setLink(e.target.value)}></input>
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}></input>
        <select onChange={e => setCuisine(e.target.value)}>
          <option>Cuisine:</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="French">French</option>
          <option value="Italian">Italian</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican/South American</option>
        </select>
        <button>Add Recipe</button>
      </form>

      <label>Search By Cuisine: </label>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Asian">Asian</option>
        <option value="French">French</option>
        <option value="Italian">Italian</option>
        <option value="Mediterranean">Mediterranean</option>
        <option value="Mexican">Mexican/South American</option>
      </select>

      {eachRecipe()}
    </div>
  )
}

export default MyRecipes