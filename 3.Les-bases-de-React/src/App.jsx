import Container from "./lessons/14.Controlled-uncontrolled-inputs/Container"

function App() {

  const cr = 'Dec 21 2024, 1.12'
  const currentlesson = 14

  return (
    <div className="main-content">
      <h3>Cours React, lesson {currentlesson} : {cr}</h3>
      <hr />      
      <Container></Container>
    </div>
  )
}

export default App
