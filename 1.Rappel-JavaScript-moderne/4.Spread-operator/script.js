/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/
const pricelist = [ 100, 200, 300, { discountrate: 22}];
console.log(pricelist);

const newpricelist = [ ...pricelist, 400, 500, 600];
console.log(`The augmented price list is now :${newpricelist} with a discount rate of ${newpricelist[3].discountrate}`);
pricelist[3].discountrate = 28;
console.log(`The augmented price list is now :${newpricelist} with a discount rate of ${newpricelist[3].discountrate}`);


// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

const person = {
    lastname: 'Bastoche',
    age: 33,
    location: 'Chabreloche'
}

console.log(`Initial person: ${JSON.stringify(person)}`);
const otherperson = {...person, lastname : 'Yves'};
console.log(`Copied person: ${JSON.stringify(otherperson)}`);
const athirdone = {...otherperson, nationality: 'FR'}
console.log(`Another one : ${JSON.stringify(athirdone)}`);

const copyright = 'Beau merle 2024, Dec 23';
const thecopyright = [...copyright];
console.log(thecopyright);


// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."

