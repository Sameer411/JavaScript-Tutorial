//console.log('john');

let sayHello = function (name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Heyy ${name}`);
}

sayHello('John')        //pass the string as arguement.



let fullNameMaker = function (firstname, middlename, lastname) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you ${firstname} ${middlename} ${lastname}`);
}

fullNameMaker('SAMEER', 'KAMLESH', 'RATHOD')


let Adder = function (num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = Adder(3, 5);
console.log(result);



let myMultiplier = function (num1, num2) {
    let product = num1 * num2;
    return (num1 * num2);             //some memory saved. 
}

//let result =myMultiplier(3,5);
console.log(myMultiplier(3, 5));

let guestUser = function (name = 'name', courseCount = 0)         //Default Paramenters
{
    return 'Hello ' + name + ' your course count is ' + courseCount
}
console.log(guestUser('Sameer', 10));

//console.log(guestUser());       to Print Default values.
//let name=null