const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added by JS'

document.querySelector('body').appendChild(myNewPara)




//Event Listeners.
//as there is only one button usually button is in classes, ID's
document.querySelector('button').addEventListener('click', (event) => {
    event.target.textcontent = 'I was clicked';

})

//Track Input Form.
//'.'for class and '#' for ID
document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);

})