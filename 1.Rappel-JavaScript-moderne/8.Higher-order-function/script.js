/* 
    1. Fonction d'ordre supérieur.

    Les fonctions d'ordre supérieur sont des fonctions qui vont soit recevoir une fonction callback en argument soit retourner une fonction, ou les deux à la fois !

    Cela ouvre la voie à de nombreuses solutions et à une plus grande fléxibilité.
*/


function filterSalaries(salaries, callback) {
    
    const selectedSalaries = []
    
    for(let i=0; i < salaries.length; i++){
        if(callback(salaries[i])) {
            selectedSalaries.push(salaries[i])
        }
    }
    return selectedSalaries;
}

const salaries = [1200,5000,4000,2500,3450,1800, 22000]
console.log(filterSalaries(salaries, salary => salary > 3000));
console.log(filterSalaries(salaries, salary => salary > 5000));

const countries = [
  {
      name: "Japan",
      gdp: 4941
  },
  {
      name: "Germany",
      gdp: 4260
  },
  {
      name: "South Korea",
      gdp: 1811
  },
  {
      name: "India",
      gdp: 3176
  },
  {
      name: "Canada",
      gdp: 1988
  },
]

console.log(filterSalaries(countries, country => country.gdp > 2000));
