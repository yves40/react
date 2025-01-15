import { useDispatch } from "react-redux"
import { updateShadowValue} from '../../reduxfeatures/shadows'

export default function ShadowColorPicker( {inputData, shadowID}) {

    const dispatch = useDispatch()
    
    function handleInput(e) {
        dispatch(updateShadowValue( {
            inputNumber: inputData.inputNumber,
            value: e.target.value,
            shadowID
        }))
    }
    
    return (
        <div className='flex mt-2'>
        <p>{inputData.name}</p>
        <input className='flex-grow border py-1 px-2 focus:outline-1 outline-gray-400' 
            type="text"  
            value={inputData.value}
            onChange={handleInput}
        />
        <input className="cursor-pointer h-[40px]"
            value={inputData.value}
            onChange={handleInput}
            type="color" />
        </div>
    )
}
