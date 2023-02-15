function RecipeCard({ recipe, cardStyle }) {

  const handleDeleteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const handleMadeClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: "made" })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const handleFavoriteClick = () => {
    fetch(`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favorite: true })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const handleAddDateClick = (e) => {
    fetch (`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: e.target.value })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return(
    <div>
      <h3><a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a></h3>
      <img src={recipe.image} alt={recipe.name} width="300px" height="300px"/>
      <br></br>
      {recipe.status === "new" ? <button onClick={handleMadeClick}>Made</button> : null}
      {recipe.favorite === null ? <button onClick={handleFavoriteClick}>Favorite</button> : null}
      <button onClick={handleDeleteClick}>Delete</button>

      <select onChange={handleAddDateClick}>
        <option>Select Date:</option>
        <option value="Sun">Sunday</option>
        <option value="Mon">Monday</option>
        <option value="Tues">Tuesday</option>
        <option value="Wed">Wednesday</option>
        <option value="Thurs">Thursday</option>
        <option value="Fri">Friday</option>
        <option value="Sat">Saturday</option>
      </select>
    </div>
  )
}

export default RecipeCard