function Item({ grocery }) {

  const handleDeleteItem = () => {
    fetch(`/groceries/${grocery.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
  }

  return(
    <div>
      <p>{grocery.items}</p>
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  )
}

export default Item