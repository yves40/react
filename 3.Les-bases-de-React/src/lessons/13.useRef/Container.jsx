import { useRef, useState } from "react"

export default function Container() {

  const [state, setState] = useState(0)
  const countRef = useRef(0)
  const txtRef = useRef()

  function handleCountRef() {
    countRef.current++;
    console.log(countRef.current);    
    console.log(txtRef.current);
    
  }

  console.log('Init page');
  console.log(txtRef);
  
  
  return (
    <div>
      <h1>Comprendre les refs avec le hook</h1>
      <hr />
      <p>Valeur du state : {state}</p>
      <p>Valeur du ref   : {countRef.current}</p>
      <button onClick={handleCountRef}>Increment the reference</button>
      <br />
      <button onClick={() => setState(state + 1) }>Increment the state</button>
      <br /><br />
      <p>Plutôt bizarre comme fonctionnement. 
        L'incrément de la ref ne provoque pas de raffraichissement de son affichage.
        L'incrément du state met tout à jour. 
      </p>
      <br /><br /><hr /><br /><br />
      <p ref={txtRef}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>

    </div>
  )
}
