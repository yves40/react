
export default function Card({id, state, copy, legal, setState}) { // Destructuring pour éviter d'avoir à préfixer

  return (
    <div>
      <p>La card avec ID : {id}</p>
      <p>State du parent : {state}</p>
      <p>{copy}</p>
      <p>{legal}</p>
      <hr />
      <button onClick={ () => setState(state + 1)}>Change parent state</button>
    </div>
  )
}