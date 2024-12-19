/* 
  Les "template literals" ou "template strings" sont des chaînes utilisant une syntaxe extrêmement pratique.
  
  On peut les utiliser pour :
  - Intégrer des expressions JS à une chaîne
  - Intégrer des sauts de ligne
  - Concaténer des chaînes
  - Créer des templates (morceau de code).

  On crée un gabarit(traduction fr) en utilisant les backticks ``.
  Pour intégrer une expression, on utilise la syntaxe ${expression} entre les backticks.
*/

/* Ajout d'expression */
const a = 12;
const b = 10;

console.log(`Le calcul de a + b = ${a+b}`);


/* Saut de ligne */

console.log(`Essai de passage à la ligne
avec les back tics
et encore une ligne de plus`)


/* Utilisation de l'expression retournée par une fonction. */

function foo() { return 'abc' }

console.log(`La fonction foo retourne le début de l'aplhabet:  ${foo()}`)
