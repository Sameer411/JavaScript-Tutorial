/*const days=['Mon','Tue','Wed','Thurs','Fri','Sat']

console.log(days[0]);

let sayHello = function()
{
    console.log("Greeting message for user");

}
days.forEach(sayHello)      //Exactly for array lenth times.*/

const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0]);



//parameter1 should be day and 2nd should be index
days.forEach(function (day, index) {
    console.log(`starts with ${index + 1} --- ${day}`);

})



