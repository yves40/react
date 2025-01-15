import { useState, useEffect } from "react"
import chevron from '../../assets/chevron.svg'
import  ShadowRange  from './ShadowRange'
import ShadowColorPicker from './ShadowColorPicker'

export default function Shadow({panelNumber, shadow}) {
    
    const [toggleShadow, setToggleShadow] = useState(false)

    const shadowInputs = shadow.inputs.map ((prop, index) => {
        if(prop.type === 'range') {
            return <ShadowRange 
                key={index} 
                inputData={shadow.inputs[index]}
                shadowID = {shadow.id}
            />
        }
        else { if (prop.type === 'color') {
            return <ShadowColorPicker 
                key={index} 
                inputData={shadow.inputs[index]}
                shadowID = {shadow.id}
            />
        }}
    })

    useEffect( () => {
            if(panelNumber === 1) {
                setToggleShadow(true)
            }
        }, []
    )

    return (
        <li className="bg-gray-50 border-b border-gray-300">
            <button onClick={()=> setToggleShadow(!toggleShadow)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100">
                <span>Shadow {panelNumber}</span>
                <img
                    style={{transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`}}
                    className="font-bold w-5" src={chevron} alt="" 
                />
            </button>
            {toggleShadow && <>
                <div className="flex items-end px-6 py-4">
                    {/* <Checkbox/> */}
                    {/* <Checkbox/> */}
                    <button className="ml-auto text-sm bg-red-600 text-white py-1 px-3 rounded">
                        Remove
                    </button>
                </div>
                <div className="px-6 py-4">
                    {shadowInputs}
                </div>
            </>
            }
        </li>
    )
}
