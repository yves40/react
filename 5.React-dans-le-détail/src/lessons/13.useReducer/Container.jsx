
import { useReducer } from "react"

export default function Container() {


  const [count, countDispatch] = useReducer(reducer, 0)

  function reducer(thecount, action) {
    switch(action.type) {
      case 'inc':
          return thecount + action.step
      case 'dec':
          return thecount - action.step
      case 'clear': 
        return 0
    }
  }

  return <div>
    <h1>useReducer</h1>
    <h3>Valeur du compteur : {count}</h3>
    <button onClick={()=> countDispatch({type: "inc", step: 5})}>Increment</button>
    <button onClick={()=> countDispatch({type: "dec", step: 5})}>Decrement</button>
    <button onClick={()=> countDispatch({type: "clear"})}>Clear</button>
  </div>
}
