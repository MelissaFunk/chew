import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

function MyRecipes({ currentUser }) {
  const [recipes, setRecipes] = useState([])
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  const [cuisine, setCuisine] = useState("")

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(recipes => setRecipes(recipes))
  }, [currentUser.id])

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }

  const handleDeleteRecipe = (recipeToDelete) => {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeToDelete.id))
  }

  const eachRecipe = () => {
    return recipes.filter(recipe => recipe.user_id === currentUser.id).map(recipe =>
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
    .then(data => handleAddRecipe(data))
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
          <option></option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="French">French</option>
          <option value="Italian">Italian</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican/South American</option>
        </select>
        <button type="submit">Add Recipe</button>
      </form>
      {eachRecipe()}
    </div>
  )
}

export default MyRecipes