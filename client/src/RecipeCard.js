function RecipeCard({ recipe, handleDeleteRecipe }) {

  const handleDeleteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(handleDeleteRecipe)
  }

  return(
    <div>
      <h3><a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a></h3>
      <img src={recipe.image} width="300px" alt={recipe.name}/>
      <button onClick={() => handleDeleteClick()}>Delete</button>
    </div>
  )
}

export default RecipeCard