import { useEffect, useState } from "react"
import Card from './Card'

export default function Container() {

  const [ showCard, setShowCard ] = useState(false)
  
  return (
    <div>
      <h1>Cleanup function</h1>
      <button onClick={()=> setShowCard(!showCard)}>Show/hide Card</button>
      { showCard && <Card></Card>}
    </div>
  )
}
