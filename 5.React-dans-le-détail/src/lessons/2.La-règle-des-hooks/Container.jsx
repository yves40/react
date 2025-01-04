
import { useRef, useState } from "react"

export default function Container() { 

  console.clear()

  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(1)
  const [s3, setS3] = useState(2)
  const s4ref = useRef(0);
  const refIncButtonLabel = `Inc Ref : ${s4ref.current}`
  const refDecButtonLabel = `Dec Ref`
  const refIncButton = useRef()
  const refDecButton = useRef()

  const globalstyle = {color: 'white', 
          backgroundColor: 'DarkGrey', 
          margin: '10px',
          padding: '10px',
          borderRadius: '10px',
          borderColor: 'white'}
  
  console.log('-------------------------------');
  
  function handleClick() {
    setS1(s1 > 3 ? 0 : s1 + 1)
  }
  function handleClickRef(value) {
    s4ref.current += value;
    if(s4ref.current <=0)  {
      s4ref.current = 0;
      refIncButton.current.style.backgroundColor = 'Green'
      refDecButton.current.style.backgroundColor = 'Green'
    }
    console.log(`Le ref s4 : ${s4ref.current}`);
    if(s4ref.current === 1) {
      refIncButton.current.style.backgroundColor = 'Red'
      refDecButton.current.style.backgroundColor = 'Red'
    }
  }
  console.log(`S1 : ${s1}`);  
  console.log(`S2 : ${s2}`);  
  console.log(`S3 : ${s3}`);
  console.log(`Le ref s4 : ${s4ref.current}`);  
  //  Initial state
  refIncButton.current.style.backgroundColor = 'Green'
  refDecButton.current.style.backgroundColor = 'Green'


  return (
    <div>
      <h1 style={globalstyle}>Les règles des Hooks</h1>
      <button style={globalstyle} onClick={handleClick}>Increment S1</button>
      <button ref={refIncButton} style={globalstyle} onClick={ () => handleClickRef(1)}>{refIncButtonLabel}</button>
      <button ref={refDecButton} style={globalstyle} onClick={ () =>handleClickRef(-1)}>{refDecButtonLabel}</button>
    </div>
  )
}

