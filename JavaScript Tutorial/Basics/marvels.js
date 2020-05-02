//Datatypes: Array

/*let one='one'
let two='two'
let three='three'*/

const superHeroes = ['IronMan','Spiderman','CaptainAmerica','Thor']     //Always declare array as const

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[2]);

console.log(superHeroes[superHeroes.length-1]);         //superHeroes.length=4

//console.log(`We have ${1+2} Super Heroes`)    //templeting

console.log(`We have ${superHeroes[superHeroes.length-1]} Super Heroes`) 
console.log(`We have ${superHeroes.length} Super Heroes`) 
/*

[ 'IronMan', 'Spiderman', 'CaptainAmerica', 'Thor' ]
IronMan
CaptainAmerica
Thor
We have Thor Super Heroes
We have 4 Super Heroes
*/

