import { useState, useEffect } from 'react'
import Item from './Item'

function Groceries({ currentUser }) {
  const [groceries, setGroceries] = useState([])
  const [item, setItem] = useState("")

  useEffect(() => {
    fetch('/groceries')
    .then(res => res.json())
    .then(groceries => setGroceries(groceries.filter(grocery => grocery.user_id === currentUser.id)))
  }, [currentUser.id, groceries])

  const addGroceries = (e) => {
    e.preventDefault()
      fetch('/groceries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: currentUser.id,
          items: item
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      setItem("")
  }
  
  const eachItem = () => {
    return groceries.map(grocery =>
      <Item grocery={grocery} key={grocery.id}/>
    )
  }
  
  return(
    <div>
      <h1>Groceries</h1>
      <a href="https://www.instacart.com/store" target="_blank" rel="noopener noreferrer">Instacart</a>
      <form onSubmit={addGroceries}>
        <input type="text" value={item} placeholder="Add Grocery Item" onChange={e => setItem(e.target.value)}></input>
        <button>Add Item</button>
      </form>
      {eachItem()}
    </div>
  )
}

export default Groceries