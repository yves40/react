/* 
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/


/* 
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/

function add(a,b) {
    return a+ b;
}

const add2 = (a,b) => a + b;

console.log(`Appel classique : ${add(10, 10)}`);
console.log(`Appel avec flèche : ${add2(20, 20)}`);

const numbers = [ 1,2,3];

numbers.forEach( el => console.log(el) );

/* 
    2. Le mot clé this.

    Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

    Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent dedans.
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elle lisent le this de l'objet global, car elles sont dans le contexte d'execution global.
*/
const knife = {
    price: 3000,
    getPrice: function () {return this.price },
    getSpecialPrice: function () {
        const discountedPrice = () => { return this.price * 0.8 }
        return discountedPrice();
    },
    getChristmasPrice: function () {return this.price * .7} ,
    getArrowPrice: () => { return this }
}
console.log(`The knife price is : ${knife.getPrice()}`);
console.log(`Special price for aficionados (this inside a function) : ${knife.getSpecialPrice()}`);
console.log(`The very special christmas price is : ${knife.getChristmasPrice()}`);
console.log(`Now use this outside any normal function, return the window object: ${knife.getArrowPrice()}`);





/* 
    3. arguments
    Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
*/




/*
    Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)

    Fonction classique : 
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/