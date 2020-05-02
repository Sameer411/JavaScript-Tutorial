
let iAmGlobal = 'someValue'               //GlobalScope
if (true) {
    let iAmLocal = 'someMoreValue';      //LocalScope

    iAmGlobal = 'superman';

    console.log(iAmGlobal);
    console.log(iAmLocal);

}
//console.log(iAmLocal);          //Error: iAmLocal has local scope.
console.log(iAmGlobal);           //prints the local value of global variable.

//OUTPUT:
//superman
//someMoreValue
//superman 


//CLIMAX(use of var as local variable)

let iAmGlobal = 'someValue'               //GlobalScope
if (true) {
    var iAmLocal = 'someMoreValue';      //LocalScope

    iAmGlobal = 'superman';

    console.log(iAmGlobal);
    console.log(iAmLocal);

}
console.log(iAmLocal);              //NO ERROR
console.log(iAmGlobal);           //prints the local value of global variable.


/*
superman
someMoreValue
someMoreValue           //Prints the local variable even outside of the block.
superman
*/

//CONCLUSION: dont declare your variables as 'var' unless and untill you want to make them global.

