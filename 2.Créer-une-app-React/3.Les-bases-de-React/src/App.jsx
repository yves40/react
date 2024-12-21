import Container from "./lessons/13.useRef/Container"

function App() {

  const cr = 'Dec 21 2024, 1.11'
  const currentlesson = 13

  return (
    <div className="main-content">
      <h3>Cours React, lesson {currentlesson} : {cr}</h3>
      <hr />      
      <Container></Container>
    </div>
  )
}

export default App
