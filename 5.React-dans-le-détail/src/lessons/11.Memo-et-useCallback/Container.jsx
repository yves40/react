import { useState, useCallback } from "react"
import Card from "./Card"

export default function Container() {

  const [count, setCount] = useState(0)

  const customLog = useCallback(() => console.log('Bonjour in callback'), [])

  return (
    <div>
     <Card txt={"test"} customLog={customLog}></Card>
     <button onClick={()=> setCount(count + 1)}>Increment Count</button>
    </div>
  )
}
