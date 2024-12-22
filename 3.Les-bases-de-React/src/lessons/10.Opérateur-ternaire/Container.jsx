import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [ validation, setValidation] = useState(false)

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez vous ?</label>
        <input name="consent" id="consent" type="checkbox" onClick={() => setValidation(!validation)}/>
        <p style={{color:  `${validation ? "lightgreen" : "red"}` }}>{validation ? 'Vous pouvez visiter le site' : 'Acceptez les conditions'}</p>
        <p className={validation ? 'valid': 'invalid'}>Test de classe en validation</p>
        <p>{validation ? 'true' : 'false'}</p>
      </form>
    </div>
  )
}
