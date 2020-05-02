/*const sayHello = function(name)           //RegularFunction
{
    return "Hey There," + name + "!"
}

console.log(sayHello('Vaibhav Bhavsar'));*/


//ArrowFunction-Cleaner code
//remove function keyword and remove braces.
//Use backticks to use Literals.
//To reduce down the code complexity.
const sayHello = (name) => `Heyy There ${name} !`       //single line function
console.log(sayHello('Vaibhav Bhavsar'));

const todos = [{
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'Go to Gym',
    isDone: true
}, {
    title: 'Study Data Structures',
    isDone: false
}]

//Arrow to pickup only those todos which are true.

const thingsDone = todos.filter((todo) => todo.isDone === true)

console.log(thingsDone);


