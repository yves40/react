import { useDispatch } from "react-redux"
import { updateBoxValue } from "../../reduxfeatures/boxProperties"

export default function BoxColorPicker({inputData}) {

    const dispatch = useDispatch()
    
    function handleInput(e) {
        console.log(inputData)
        dispatch(updateBoxValue( {
            inputNumber: inputData.inputNumber,
            value: e.target.value
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
