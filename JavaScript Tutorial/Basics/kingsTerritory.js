//KINGS TERRITORY PROBLEM


let king = 'Mahendra Baahubali'             //global scope
if (true) {
    //let king = ' Amarendra Baahubali'       //scope limited to inner to outer block.

    if (true) {

        //let king = 'Bhallaldev'        //scope limited to inner block.
        king = 'Bhallaldev'              //should give scope prototype to variables.
        console.log(king);

    }
}

if (true) {
    console.log("I am Second part: " + king)        //global king should be printed but because of absence of Let or var for 'Bhallaldev' it became global.

}

/*OUTPUT:
Bhallaldev
I am Second part: Bhallaldev*/

/*CONCLUSION: Always make a habit of declaring variable either as 'var' or 'let'so that atleast we 
know what we are Doing*/