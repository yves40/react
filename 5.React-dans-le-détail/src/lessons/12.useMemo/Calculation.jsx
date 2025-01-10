import { useState, useMemo } from 'react'


export default function Calculation() {

    const [temperature, setTemperature] = useState("")

    function celsiusToFarenheit(degree) {
        return degree ? degree * 1.8 + 32 : 'Entrez une valeur'
    }

    const expensiveCalculatation = useMemo( () => {
            console.log("RENDER of new CALC")
            return celsiusToFarenheit(temperature)
        }
        , [temperature] )

  return (
    <div>
        <input type="number" 
        value={temperature}
        onChange={ e => setTemperature(e.target.value)}/>
        <h1>Valeur de {temperature} degrés en Farenheit {expensiveCalculatation}</h1>

    </div>
  )
}
