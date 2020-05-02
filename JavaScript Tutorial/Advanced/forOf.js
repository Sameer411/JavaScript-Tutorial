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

let users = new Map()

users.set('john', john)     //first john has nothing to do with the 'John' object created above.
users.set('marry', marry)
users.set('sam', sam)


for (const key
    of users.keys()) {
    console.log(key);

}

/*john
marry
sam*/

for (const value
    of users.values()) {
    console.log(value.name);

}

/*I am John
I am Merry
I am Sam*/

for (const [key, value] of users.entries()) {
    console.log(key + '=' + value.name);

}

/*john = I am John
marry = I am Merry
sam = I am Sam*/

//convert the above line in lirerals

//users.forEach(value, key) => console.log(key + ' = ' + value.name);

var arrofArr = [['one', '1'], ['two', '2',], ['three', '3']]

var newMap = new Map(arrofArr)
console.log(newMap);

//Map { 'one' => '1', 'two' => '2', 'three' => '3' }




