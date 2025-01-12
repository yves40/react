
import { useParams } from "react-router-dom"

export default function UserProfile() {
    const params = useParams()
    console.log(params);
    
  return (
    <div>
        <p className='text-4xl font-semibold text-center pt-10'>
            Your profile : {params.id}
        </p>
    </div>
  )
}
