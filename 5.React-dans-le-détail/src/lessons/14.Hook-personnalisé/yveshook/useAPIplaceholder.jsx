import { useState, useEffect } from 'react';

export default function useAPIplaceholder() {

    const [placeData, setPlacedata] = useState()
    const [yloading, setLoading] = useState(true)
    const [yerror, setError] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then ( response => {
            // console.log(response);
            if(!response.ok) {
                setError(true)
                setLoading(false)
                throw new Error(`An error occured HTTP error code :  ${response.status}`);
            }
            return response.json();
        })
        .then ( data => {
            // console.log(data);
            setPlacedata(data)
            setLoading(false)
            setError(false)
        })
        .catch(e => {
            console.log(e);
            setError(true)
        })
    }, [])

    return { placeData, yerror, yloading}
}

