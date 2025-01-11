import { useState, useEffect } from 'react'

export default function useAPICalls() {

  const [catData, setCatData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect( () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
    .then(response => {
      if(!response.ok) throw new Error()  // To trap all possible errors
      return response.json()
    })
    .then(data => {
      console.log(data)
      setCatData(data)
      setLoading(false)
    })
    .catch ( () => setError(true))

  }, [])

  return { catData, error, loading }
}
