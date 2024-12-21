import { useRef, useState } from "react"
import "./Container.css"

export default function Container() {

  const [ state, setState] = useState("")
  const emailRef = useRef();

  function handleInput(e) {
    setState(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(emailRef.current.value);
  }

  return (
    <div>
      <h2>Composants "controlled" et "uncontrolled"</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Votre pseudo</label>
        <input type="text" id="pseudo" value={state} onChange={handleInput}/>
        {!state && 'Entrez un pseudo'}
        <label htmlFor="email">Votre email</label>
        <input type="email" id="email" ref={emailRef}/>
        <br /><button>Envoyer</button>
      </form>
      <p>Votre pseudo : {state} </p>
    </div>
  )
}
