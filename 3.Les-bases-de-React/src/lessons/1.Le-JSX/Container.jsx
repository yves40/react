function Container() {
  const copyright = "Beau Merle 2024 Dec 21, 1.10";
  let clickcount = 0;

  return (
    <div id="toto">
      <p>Hello world from container</p>
      <ul className="mt-2">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
        <li>Six</li>
      </ul>

      <br />
      <button onClick={ (e) => handleClick(e)}>Call API</button>
      <br />

      <p>{`Ceci est un texte avec placeholder : ${copyright}`}</p>
      <p>{`Click counter : ${clickcount}`}</p>
      <br />
      <input type="text" />
<hr />
      <p>Fin de la leçon</p>
    </div>
  );

  function handleClick(e) {
       console.log(`Button clicked ${++clickcount}`) 
       console.log(e);
       
  }

}

export default Container;
