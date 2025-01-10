import { useState, useRef, useEffect } from "react"
import {nanoid} from "nanoid"
import './dynamicRefSelection.css'


export default function DynamicRefSelection() {

  const version = 'DynamicRefSelection: 1.34, Jan 10 2025'

  const [fruits, setFruits] = useState([
    {id: nanoid(8), value: 'Pommes ', price: 100},
    {id: nanoid(8), value: 'Oranges ', price: 200},
    {id: nanoid(8), value: 'Fraises ', price: 300},
    {id: nanoid(8), value: 'Abricots ', price: 400},
    {id: nanoid(8), value: 'Pêches ', price: 500},
  ])
  const fruitsRef = useRef([])

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
  function manageRefs(elem, fruit) {
    console.log(`manageRefs : This is ${fruit.value}`);
    
    if(elem) {
      fruitsRef.current.push(elem)
    }
    else {
      fruitsRef.current.shift()
    }
  }

  if(fruitsRef.current.length != 0) {
    fruitsRef.current.map((elem, index) => {
      if(fruits[index].price > 300)elem.style.color = 'red'
    })
  }

  return (
    <>
      <h1>Sélection dynamique</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit.id} onClick={() => deleteFruit(fruit.id)} ref={elem => { manageRefs(elem, fruit) }}>
            <span>{index+1}</span><span>{fruit.value}</span><span>{fruit.price}</span><span>{fruit.id}</span>
          </li>
        ))}
        {console.log(`## MAIN return section, fruits arrray size is : ${fruits.length}`)}
        {console.log(`## MAIN return section, fruitsrefs arrray size is : ${fruitsRef.current.length}`)}
        </ul>
      <button onClick={() => setFruits([...fruits, {id: nanoid(8), value: 'Nouveau fruit exotique',
                price: 1000 }])}>Add fruit</button>
    </>
  )
}
