import { useDispatch, useSelector } from "react-redux"
import { startChrono, reset } from "../../reduxfeatures/chrono"

export default function Chrono() {

    const dispatch = useDispatch()
    const chrono = useSelector(state => state.chrono)

  return (
    <div className='text-2xl text-slate-100 mb-2 mt-2'>
        <p>Le chrono : {chrono.value}</p>
        <button className='p-2 m-2 min-w[125px] bg-slate-100 rounded text-slate-700'
                onClick={() => dispatch(startChrono())}>
            Start
        </button>
        <button className='p-2 m-2 min-w[125px] bg-slate-100 rounded text-slate-700' 
                onClick={() => dispatch(reset())}>
            Reset
        </button>
    </div>
  )
}
