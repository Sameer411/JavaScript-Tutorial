const todos = [{
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'practice coding',
    isDone: true
},

{
    title: 'Go to college',
    isDone: true
},

{
    title: 'sleep early',
    isDone: false
},

{
    title: 'watch movie',
    isDone: false
},

{
    title: 'Study Data Structures',
    isDone: false
}]


//Asssignment- 3 True and 3 false and should return only the tile which are not done.

const thingsFalse = todos.filter((todo) => todo.isDone === false)

console.log(thingsFalse);

////{ title: 'sleep early', isDone: false },
//{ title: 'watch movie', isDone: false },
//{ title: 'Study Data Structures', isDone: false }]