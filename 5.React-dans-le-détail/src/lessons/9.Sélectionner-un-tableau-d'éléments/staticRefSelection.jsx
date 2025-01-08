import { useState, useRef, useEffect } from "react"

export default function StaticRefSelection() {

  const inputsRef = useRef([])

  function addElement(el) {
    if(el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el)
    }
    console.log(`Element with ID ${el.id} added`)
    console.log(inputsRef);
  }

  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>
      <div>
        <input id="1" ref={addElement} type="text" />
        <input id="2" ref={addElement} type="text" />
        <input id="3" ref={addElement} type="text" />
      </div>

    </>
  )
}
