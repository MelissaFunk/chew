function RecipeCard({ recipe }) {
  return(
    <div>
      <h3><a href={recipe.link} target="_blank" rel="noreferrer">{recipe.name}</a> | {recipe.cuisine}</h3>

    </div>
  )
}

export default RecipeCard