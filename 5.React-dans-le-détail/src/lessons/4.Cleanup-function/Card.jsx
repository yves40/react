import { useEffect, useState } from "react"

import "./Card.css"

export default function Card() {

  const [ state, setState] = useState(0)

  useEffect( ()=> {
    console.log('mount')
    return () => console.log('cleanup called during update or destruction');        
  }, [state])
  
  return (
    <div className="card">
      <p>Le card et son state qui vaut :{state}</p>
      <button onClick={() => setState(state+1)}>Inc</button>
    </div>
  )
}
