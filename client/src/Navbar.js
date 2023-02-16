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
    <div className="navbar">
      <img src="https://i.imgur.com/83mNXhn.png" alt="logo"/>
      <h1>Chew</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar