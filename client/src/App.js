import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import MyRecipes from './MyRecipes'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      {currentUser.username ? <Navbar /> : null}
      <Switch>
        <Route exact path="/"><Login setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/my-recipes"><MyRecipes currentUser={currentUser}/></Route>
      </Switch>
    </div>
  );
}

export default App;
