function RecipeCard({ recipe, handleDeleteRecipe }) {

  const handleDeleteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(handleDeleteRecipe)
  }

  const handleMadeClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: "made"
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const handleFavoriteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        favorite: true
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return(
    <div>
      <h3><a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a></h3>
      <img src={recipe.image} width="300px" alt={recipe.name}/>
      {recipe.status === "new" ? <button onClick={handleMadeClick}>Made</button> : null}
      {recipe.favorite === null ? <button onClick={handleFavoriteClick}>Favorite</button> : null}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default RecipeCard