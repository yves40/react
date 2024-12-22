import { useState } from "react"

export default function Container() {

  const [ count, setCount ] = useState(0);  // Tableau de 2 élements le 2ème est une fonction  
                                            // On déstructure le tableau retourné

  function handleClick() {
    // setCount(count + 1);
    setCount((count) => {
      if(count === 10)
        count = 0;
      else
        count++;
      return count;
    });
  }

  return (
    <div>
      <h1>Le state</h1>
      <p>Bouton cliqué {count} fois</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
