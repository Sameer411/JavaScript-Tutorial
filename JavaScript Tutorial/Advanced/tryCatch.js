//we dont want our full program crash down because of one error.

const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 70
    }
    else {
        throw Error('Amount needs to be in number')
    }
}

//const myValue = convertToRs('five')
//console.log(myValue);

try {
    const myValue = convertToRs('five')
    console.log(myValue);
} catch (e) {
    console.log(e);

}

//Error: Amount needs to be in number

console.log('i will not run if program crahses.');





