export default function Container() {

const data = [
  {id: 1 , name: 'Yves'},
  {id: 2 , name: 'Isabelle'},
  {id: 3 , name: 'Tono'},
  {id: 4 , name: 'Bintoule'},
  {id: 5 , name: 'Ratoon'},
  {id: 6 , name: 'Barbilec'},
  {id: 7 , name: 'Zabou'},
]

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        { data.map(user => <li key={user.id}>{user.name}</li> )}
      </ul>
    </div>
  )
}