function PlannerCard({ recipe }) {

  const handleChangeDateClick = (e) => {
    fetch (`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: e.target.value })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const handleRemoveDateClick = () => {
    fetch (`/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: null })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return(
    <div>
        <p><a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.name}</a></p>
        <img src={recipe.image} width="150px" height="150px" alt={recipe.name}/>
        <br></br>
        <select onChange={handleChangeDateClick}>
          <option>Change Date:</option>
          <option value="Sun">Sunday</option>
          <option value="Mon">Monday</option>
          <option value="Tues">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thurs">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
        </select>
        <button onClick={handleRemoveDateClick}>Remove</button>
    </div>
  )
}

export default PlannerCard