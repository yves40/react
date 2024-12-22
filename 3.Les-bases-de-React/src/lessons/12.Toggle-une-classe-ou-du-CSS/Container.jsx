import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <h3>Bienvenu sur NotesMania</h3>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit pariatur corrupti, repellat doloribus cupiditate inventore facilis, tempora sed ut, dicta iste nihil temporibus non porro ex reiciendis a molestias. Explicabo nobis eius suscipit aperiam laboriosam animi blanditiis repellendus sint labore maiores quam quis modi, non earum inventore laborum illum repudiandae dolor. Iste, aperiam! Vero saepe fuga incidunt culpa, facere cumque repellat alias officia iusto dignissimos? Consectetur, quasi quaerat. Illo ea facilis distinctio voluptatibus odit doloribus, et quam earum natus dolor deleniti, consequuntur rem perferendis officiis nostrum, non eum iusto nulla? Voluptatum quo at consectetur, impedit deserunt maiores molestias architecto libero.</p>
      <button onClick={() => setDarkMode(!darkMode)}>Activer le {darkMode ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}
