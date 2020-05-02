//Adding the Document using JS

const myPElement = document.querySelectorAll('p')


myPElement.forEach(function (p) {
    p.textContent = 'I am Changed by the javascript'
})

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added by JS'

document.querySelector('body').appendChild(myNewPara)