import { useState } from "react"
import HugeContent from "./HugeContent"

export default function Container() {

  const [showContent, setShowContent] = useState(false)

  return (
    <div>
      <h1>Ajouter un évènement global</h1>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Cacher' : 'Montrer'}
      </button>
      {showContent && <HugeContent/>}
    </div>
  )
}
