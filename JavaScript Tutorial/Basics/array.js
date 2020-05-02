const numbers = ['one', 'two', 'three', 'four', 'five', 'six']
console.log(numbers);

numbers[1] = 'SOMETHING';     //replace

console.log(numbers);

numbers.shift()  //STARTING INDEX 0 IS GONE and also it also returns the element that it has shifted.

console.log(numbers.shift());
console.log(numbers);

numbers.unshift('ZERO')         //Inserts new elements at the start of the array.
console.log(numbers);


numbers.pop()                   //removes the last element and returns it.
console.log("The elements to be deleted is:" + numbers.pop());
console.log(numbers);

numbers.push('Seven')           // appends new elemets to an array and returns the new lenngth.
console.log(numbers.push());
console.log(numbers);


numbers.splice(2, 2, 'NOTHING')       //start index, shift index, replace string
console.log(numbers);


/*OUTPUT:
[ 'one', 'two', 'NOTHING', 'five', 'six' ]*/