/*Include .js file at the end of the body as page loads faster 
>= if script dependent upon what is on the web page.
Include .js file at the head of the body as it loads first. => to load your script First.
both true both false as well.
Answer:Depends on how you want to use it*/


//console.log(document.title);     //Ctrl+Shift+I=Inspect
//console.log(document.getElementById("idone"));
//console.log(document.getElementsByClassName);

/*const myElement = document.querySelectorAll('p')
console.log(myElement[0]);*/


//const myElement = document.querySelectorAll('#idone')
//console.log(myElement[0]);

//const myElement = document.querySelectorAll('.classone')
//console.log(myElement[0]);

/*const myPElement = document.querySelector('p')
myPElement.textContent = 'I am being changed by JS'
console.log(myPElement);*/

const myPElement = document.querySelectorAll('p')             //For all p's
myPElement.forEach((p) => p.textContent = 'I am Changed using loop in JS')      //same using arrow function.

/*I am Changed using loop in JS

I am Changed using loop in JS

I am Changed using loop in JS

I am Changed using loop in JS

I am Changed using loop in JS*/

/*const myPElement = document.querySelectorAll('p')             //For all p's
myPElement.forEach(function (p) {
    p.remove()
})*/






