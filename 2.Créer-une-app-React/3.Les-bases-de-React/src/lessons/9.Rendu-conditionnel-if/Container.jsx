export default function Container() {

  const isLogged = false;
  let welcome;

  if(isLogged) 
    welcome = 'Vous êtes connecté'
  else
    welcome = 'Connectez vous'

  return <div>
    <h1>Rendu conditionnel avec if</h1>
    <p>{welcome}</p>
  </div>
}
