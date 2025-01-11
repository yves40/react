import { use } from "react"
import useAPICalls from "./hooks/useAPICall"
import spinner from './spinner.svg'

export default function Container() {
  const {catData, error, loading} = useAPICalls()
  console.log(catData);

  let content;
  if(loading && !error) content = <img src={spinner} alt="Loading"/>
  else if (error) content = <p>KO, error occured</p>
  else if (catData) content = <img src={catData[0].url} alt="Photo d'un chat" />

  return (
    <div>
      <h1>Hook personnalisé</h1>
      <h2>Photo de chat 🐾</h2>
      {content}
    </div>
  )
}
