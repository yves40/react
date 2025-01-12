import { useLocation } from "react-router-dom";

export default function Contact() {
    const params = useLocation()
    console.log(params);

    return (
    <div>
        <p className='text-4xl font-semibold text-center pt-10'>Contact us, big promotions till Jan 31</p>       
        <p className='text-xl font-semibold text-center pt-10'>Params: {params.state.url}</p>       
        <p className='text-sm font-semibold text-center pt-2'>{params.state.copyright}</p>       
    </div>
  )
}
