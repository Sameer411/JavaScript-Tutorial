/*const myTodos = ['Buy Bread', 'Go to Gym', 'Study Data Structures']
console.log(myTodos.indexOf('Buy bread'));*/

const newTodos =
    [{
        title: 'Buy Bread',
        isDone: false,
    },
    {
        title: 'Go to Gym',
        isDone: false,
    },
    {
        title: 'Study Data Structures',
        isDone: true,
    }
    ]

//Search array. As soon as we get that perticular string it returns its index.
const index = newTodos.findIndex(function (todo, index) {
    return todo.title === 'Go to Gym'       //we are looking for this string
})

console.log(index);

//OUTPUT: 1



//Method 1
/*const findTodo = function (myTodos, title) {
    const index = myTodos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()     //for parameter
    })

    return myTodos[index]       //for function
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe);*/
//OUTPUT: { title: 'Go to Gym', isDone: false }

//Method 2
const findTodo = function (myTodos, title) {
    const titleReturned = myTodos.find(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe);

//OUTPUT: { title: 'Go to Gym', isDone: false }
