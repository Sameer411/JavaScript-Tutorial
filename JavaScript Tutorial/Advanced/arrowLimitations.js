const cameras = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `This canon camera is of ${this.price}`
    }
}

console.log(cameras.myDes());           //ERROR
//This canon camera is of undefined

//CONCLUSION: Dont use arrow function in methods and constructors