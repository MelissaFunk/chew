import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeCard from './RecipeCard'
import Planner from './Planner'

function MyRecipes({ currentUser }) {
  const [recipes, setRecipes] = useState([])
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [filter, setFilter] = useState("All")
  const [newFilter, setNewFilter] = useState(false)
  const [madeFilter, setMadeFilter] = useState(false)
  const [favoriteFilter, setFavoriteFilter] = useState(false)

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(recipes => setRecipes(recipes.filter(recipe => recipe.user_id === currentUser.id)))
  }, [currentUser.id, recipes])

  const allClick = () => {
    setNewFilter(false)
    setMadeFilter(false)
    setFavoriteFilter(false)
  }

  const newClick = () => {
    setNewFilter(true)
    setMadeFilter(false)
    setFavoriteFilter(false)
  }

  const madeClick = () => {
    setNewFilter(false)
    setMadeFilter(true)
    setFavoriteFilter(false)
  }

  const favoriteClick = () => {
    setNewFilter(false)
    setMadeFilter(false)
    setFavoriteFilter(true)
  }

  const newFilterRecipes = () => {
    return recipes.filter(recipe => {
      if (newFilter === true) {
        return recipe.status === "new"
      } else {
        return true
      }
    })
  }

  const madeFilterRecipes = () => {
    return newFilterRecipes().filter(recipe => {
      if (madeFilter === true) {
        return recipe.status === "made"
      } else {
        return true
      }
    })
  }

  const favoriteFilterRecipes = () => {
    return madeFilterRecipes().filter(recipe => {
      if (favoriteFilter === true) {
        return recipe.favorite === true
      } else {
        return true
      }
    })
  }

  const filterRecipes = () => {
    return favoriteFilterRecipes().filter(recipe => {
      if (filter === "All") {
        return true
      } else {
        return recipe.cuisine === filter
      }
    })
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const eachRecipe = () => {
    return filterRecipes().sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    .map(recipe =>
        <RecipeCard recipe={recipe} key={recipe.id} />
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
    .then(data => console.log(data))
    setName("")
    setLink("")
    setImage("")
    setCuisine("")
    e.target.reset()
  }

  return(
    <div className="my-recipes">
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

      <button onClick={allClick}>All</button>
      <button onClick={newClick}>New</button>
      <button onClick={madeClick}>Made</button>
      <button onClick={favoriteClick}>Favorites</button>

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

      <div className="carousel-div">
        <Carousel responsive={responsive}>
          {eachRecipe()}
        </Carousel>
      </div>

      <Planner currentUser={currentUser}/>
    </div>
  )
}

export default MyRecipes