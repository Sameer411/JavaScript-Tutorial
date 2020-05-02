
//==: Equality  of value
//===:Identity of objects 

console.log(2 == 2);         //true
console.log(2 == 2.0);        //true
console.log(2 === 2.0);         //true
console.log('' === '');           //true

/*let myvar=''                    //true
let myVarTwo=''
console.log(myvar===myVarTwo);*/

/*let myvar={}          //objects          //false
let myVarTwo={}
console.log(myvar===myVarTwo);*/

let myvar = {}                    //True
let myVarTwo = myvar
console.log(myvar === myVarTwo)

console.log({} === {});         //false


