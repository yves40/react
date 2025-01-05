import "./Container.css"
import { useState, useEffect } from "react"
import spinner from './spinner.svg'


export default function Container() {

  const [APIstate, setAPIstate] = useState(
    {
      loading: false, 
      error: false,
      data: undefined
    }
  )


  useEffect(() => {
    setAPIstate({...APIstate, loading: true})
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => {
      if(!resp.ok) throw new Error(resp.status)
      return resp.json()
    })
    .then(data => {
      console.log(`Received array length : ${data.length}`);
      setAPIstate({loading: false, error: false, data: data})
    })
    .catch((status) => {
      setAPIstate({loading: false, error: true, data: undefined})
    })
  }, [])

  let content;

  if(APIstate.loading) content = <img src={spinner} alt="Chargement" />
  else if(APIstate.error) content = <p>Error...</p>
  else if(APIstate.data?.length > 0) {
    content = <ul>
      {APIstate.data.map (item => {
        return (
        <li key={item.id}>
        <span>{item.name}</span>
        <span>{item.email}</span>
        <span>{item.phone}</span>
        </li> )
      })}
    </ul>
  }
  else if (APIstate.data?.length === 0)
    content = <p>Pas de données trouvées</p>

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  )
}
