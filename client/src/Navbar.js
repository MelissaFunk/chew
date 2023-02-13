import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

function Navbar({ setCurrentUser }) {
  const history = useHistory()

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(resp => {
      if (resp.ok) {
        setCurrentUser({})
        history.push('/')
      }
    })
  }

  return(
    <div>
      <Link to="/my-recipes"><h3>My Recipes</h3></Link>
      <Link to="/planner"><h3>Planner</h3></Link>
      <Link to="/groceries"><h3>Groceries</h3></Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar