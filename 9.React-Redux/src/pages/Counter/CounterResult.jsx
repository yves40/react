import { useSelector } from "react-redux"


export default function CounterResult() {

    const counter = useSelector(state => state.counter)
  
    return (
        <>
            <h1 className="text-slate-100 text-3xl">Redux Counter : {counter.value}</h1>
        </>
    )
}
