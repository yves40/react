import "./Container.css"
import { useEffect, useState } from "react"

export default function Container() {

  const [count, setCount] = useState(0)

  console.log('Mise à jour initiale');
  
  console.log(count);

  useEffect(() => {
    console.log('useEffect handler called after 1st load and then for declared dependencies');
    
  }, [count]) // 2ème paramètre est un tableau des dépendances
  
  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </div>
  )
}
