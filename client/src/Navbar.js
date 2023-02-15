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
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar