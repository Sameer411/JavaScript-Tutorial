const todo=['DELD assignments','NPTEL C++','NPTEL DSA using python','LCO Javascript','Pointer concept'];


console.log('-----------------Your TODO list is as follows:--------------------')
/*function()
{
    console.log(`your task number ${index} is ${task}`)
}*/

todo.forEach(function(task, index)
{
    console.log(`your task number ${index+1} is ${task}`);
})

/*-----------------Your TODO list is as follows:--------------------
your task number 1 is DELD assignments
your task number 2 is NPTEL C++
your task number 3 is NPTEL DSA using python
your task number 4 is LCO Javascript
your task number 5 is Pointer concept*/