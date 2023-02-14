function PlannerCard({ recipe }) {
  return(
    <div>
        <p><a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a></p>
        <img src={recipe.image} width="150px" alt={recipe.name}/>
        {recipe.status === "new" ? <button>Made</button> : null}
        <button>Change Date</button>
        <button>Remove</button>
    </div>
  )
}

export default PlannerCard