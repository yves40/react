import { use } from "react"
import useAPICalls from "./hooks/useAPICall"
import useAPIplaceholder from "./yveshook/useAPIplaceholder"
import spinner from './spinner.svg'

export default function Container() {
  const {catData, error, loading} = useAPICalls()
  const {placeData, yerror, yloading} = useAPIplaceholder()
  console.log(placeData);

  let content;
  if(loading && !error) content = <img src={spinner} alt="Loading"/>
  else if (error) content = <p>KO, error occured</p>
  else if (catData) content = <img src={catData[0].url} alt="Photo d'un chat" />

  let ycontent;
  if(yloading && !yerror) ycontent = <img src={spinner} alt="Loading"/>
  else if (yerror) ycontent = <p>KO, cannot get people list</p>
  else if (placeData) { 
    ycontent = <ul>
      { placeData.map(person => 
        <li key={person.id}>
          <span>{person.name}</span> 
        </li> )}
    </ul>
  }

  return (
    <div>
      <h1>Hook personnalisé</h1>
      <h2>Photo de chat 🐾</h2>
      {content}
      <h2>Candidats adoption déclarés</h2>
      {ycontent}      
    </div>
  )
}
