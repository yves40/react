/* 
    1. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
}




// Donner un nom différent aux constantes



// Créer des constantes par défaut, au cas où les props n'existent pas.



// Combiner un nom différent et des valeurs par défaut.




// Affecter les props d'un objet attendu en paramètre

const prices = {
  price1: 230,
  price2: 310
}

function foo({price1, price2}) {
  console.log(`Initial prices : ${JSON.stringify(prices)}`);
  return price1 + price2;  
}

console.log(`Total amount is : ${foo(prices)}`);


/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];




// valeur par défaut et ignorer des valeurs

const fruits = [ 'orange', 'banane', 'pomme', 'peche'];
const [ orange, banane, ,peche] = fruits;
console.log(orange, banane, peche);

// affecter le reste d'un tableau

const [ artisan, ...benefits] = [ 'Bastien', 132, 200, 89, 45, 430];
console.log(artisan, benefits);

// Fonctionne aussi avec les strings
const str = 'ABCDEF'
const [a, b,,d] = str
console.log(a, b, d);
