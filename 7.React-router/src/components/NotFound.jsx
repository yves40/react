import { Link } from "react-router-dom"
import reacticon from '../assets/react.svg'

export default function NotFound() {
  return (
    <div>
        <p className='text-4xl font-semibold text-center pt-10'>
            Cette page n'existe pas, désolé
        </p>     
        <div className='text-center mt-3' >
            <Link to="/">Back home </Link>
            <img className="mx-auto mt-2" src={reacticon} alt="" /> 
        </div>   
    </div>
  )
}
