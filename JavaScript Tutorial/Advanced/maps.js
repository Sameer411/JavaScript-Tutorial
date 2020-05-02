var john = {
    name: 'I am John',
    age: 24,
    isActive: true,

}

var marry = {
    name: 'I am Merry',
    age: 21,
    isActive: true,
}

var sam = {
    name: 'I am Sam',
    age: 20,
    isActive: false,
}


//To send the set of data in a packet in one go.(in case of databases like mongoDB, firebase)
let users = new Map()

users.set('john', john)     //first john has nothing to do with the 'John' object created above.
users.set('marry', marry)
users.set('sam', sam)

console.log(users);

/*Map {
    'john' => { name: 'I am John', age: 24, isActive: true },
    'marry' => { name: 'I am Merry', age: 21, isActive: true },
    'sam' => { name: 'I am Sam', age: 20, isActive: false }
}*/

console.log(users.size);            //3

console.log(users.get('sam'));      //{ name: 'I am Sam', age: 20, isActive: false }

console.log(users.keys());              //MapIterator { 'john', 'marry', 'sam' }

console.log(users.values());

/*MapIterator {
    { name: 'I am John', age: 24, isActive: true },
    { name: 'I am Merry', age: 21, isActive: true },
    { name: 'I am Sam', age: 20, isActive: false }
}*/








