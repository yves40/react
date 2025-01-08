import { useState, useRef, useEffect } from "react"
import {nanoid} from "nanoid"

export default function DynamicRefSelection() {

  const [fruits, setFruits] = useState([
    {id: nanoid(8), value: 'Pommes ', price: 100},
    {id: nanoid(8), value: 'Oranges ', price: 200},
    {id: nanoid(8), value: 'Fraises ', price: 300},
    {id: nanoid(8), value: 'Abricots ', price: 400},
    {id: nanoid(8), value: 'Pêches ', price: 500},
  ])
  const fruitsRef = useRef([])

  console.log(fruits);
  /**
   * 
   * @param {*} id The element ID to be removed
   */
  function deleteFruit(id) {
    setFruits(fruits.filter(fruit => fruit.id != id))
  }
  /**
   * 
   * @param {*} elem L'élément qui va être référencé dans les Refs
   */
  function manageRefs(elem) {
    if(elem) {
      fruitsRef.current.push(elem)
    }
    else {
      fruitsRef.current.shift()
    }
    // fruitsRef.current[0].style.color = 'red';
    // console.log(fruitsRef.current[0]);
  }

  if(fruitsRef.current.length != 0) {
    fruitsRef.current.map((elem, index) => {
      console.log(elem);
      if(fruits[index].price > 300)elem.style.color = 'red'
    })
  }


  return (
    <>
      <h1>Sélection dynamique</h1>
      <ul>
          {fruits.map((fruit, index) => (
            <li key={fruit.id} onClick={() => deleteFruit(fruit.id)} ref={elem => {manageRefs(elem) }}>
              <span>{index+1}</span><span>{fruit.value}</span><span>{fruit.price}</span><span>{fruit.id}</span>
            </li>
          ))}
      </ul>
      <button onClick={() => setFruits([...fruits, {id: nanoid(8), value: 'Nouveau fruit exotique',
                price: 1000 }])}>Add fruit</button>
      {console.log(fruitsRef)}
    </>
  )
}
