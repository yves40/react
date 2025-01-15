import { useSelector } from "react-redux"
import BoxRange from "./BoxRange"
import BoxColorPicker  from "./BoxColorPicker"

export default function BoxPanel() {

    const boxState = useSelector(state => state.boxProperties)
    const boxInputs = boxState.map ((prop, index) => {
        if(prop.type === 'range') {
            return <BoxRange key={index} inputData={prop}/>
        }
        else { if (prop.type === 'color') {
            return <BoxColorPicker key={index} inputData={prop}/>
        }}
    })
    return (
        <div className="bg-gray-50 px-6 py-4 border-b border-e-gray-300">
            <p className="font-bold text-lg my-2">Box properties</p>
            {boxInputs}
        </div>
    )
}
