function myValidation() {
    //let myValue = document.querySelector('myform')
    let myValue = document.getElementById('myform').value;
    if (isNAN(myValue) || myValue < 1 || myValue1 > 20) {
        console.log("Not a valid input.");

    }
    else {
        console.log("This input is OK");

    }

}


//Form Vaidation.
//. for class

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();     //to get rid of URL
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';            //to reset the fields.
    event.target.realname.value = '';

})           