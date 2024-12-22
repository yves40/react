import { useState } from 'react'
import Card from './Card'

export default function Container() {
  
  const policy = "Vos données sont à l'abri";
  const [state, setState ] = useState(2000);
  const [copyright, setCopyright ] = useState("Beau Merle Dec 2024, 1.00");
  const [legal, setLegal ] = useState(policy);
  const id = 29939;

  return (
    <div>
      <p>State du container : {state}</p>
      <Card id={id} state={state} copy={copyright} legal={legal} setState={setState}></Card>
    </div>
  )
}
