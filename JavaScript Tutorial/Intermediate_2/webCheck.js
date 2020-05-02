let userEmail = 'abc'
let password = '1234'

console.log(password.length);
console.log(userEmail.toUpperCase());

let userChecker = function (myString) {
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }
    return false            //else condition
}

let passChecker = function (pass) {
    if ((pass.includes(1234)) && (pass.length > 8)) {
        return true
    }
    return false
}


/*4
ABC*/