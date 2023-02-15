import { useState, useEffect } from 'react'
import PlannerCard from './PlannerCard'

function Planner({ currentUser }) {
  const [sun, setSun] = useState([])
  const [mon, setMon] = useState([])
  const [tues, setTues] = useState([])
  const [wed, setWed] = useState([])
  const [thurs, setThurs] = useState([])
  const [fri, setFri] = useState([])
  const [sat, setSat] = useState([])

  useEffect(() => {
    fetch('/recipes')
    .then(res => res.json())
    .then(recipes => {
      setSun(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Sun"))
      setMon(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Mon"))
      setTues(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Tues"))
      setWed(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Wed"))
      setThurs(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Thurs"))
      setFri(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Fri"))
      setSat(recipes.filter(recipe => recipe.user_id === currentUser.id).filter(recipe => recipe.date === "Sat"))
    })
  }, [currentUser.id])

  const eachSun = () => {
    return sun.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }

  const eachMon = () => {
    return mon.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }
  const eachTues = () => {
    return tues.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }
  const eachWed = () => {
    return wed.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }

  const eachThurs = () => {
    return thurs.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }

  const eachFri = () => {
    return fri.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }

  const eachSat = () => {
    return sat.map(recipe =>
      <PlannerCard recipe={recipe} key={recipe.id}/>
    )
  }

  return(
    <div className="planner-div">
      <h1>Planner</h1>
      <table>
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{eachSun()}</td>
            <td>{eachMon()}</td>
            <td>{eachTues()}</td>
            <td>{eachWed()}</td>
            <td>{eachThurs()}</td>
            <td>{eachFri()}</td>
            <td>{eachSat()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Planner