const user ={
    userName:"Hammad",
    price:120,
    welcomeMessage:function(){
        console.log(`${this.userName} , welcome to website`);//current context
        console.log(this);
    }

}

// user.welcomeMessage()

// user.userName="ham"

// user.welcomeMessage()

// console.log(this); // in node enviroment THIS will output empty and if you run it in browser than it will show all GLOBAL window commands because its enviroment is an  browser engine and not a separte one like here in node


// function chai(){
//     let username="hammad"
//     console.log(this.username);
// }


//ARROW FUNCTION

// const  chai= ()=>{
//     let username="hammad"
//     console.log(this);
// }

// chai()



// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=>  num1+num2 //implicit  return 
// const addTwo=(num1,num2)=>  (num1+num2 ) //implicit return this one is mostly used in react
const addTwo=(num1,num2)=> ({ username:"hammad"}) //for objects put them into square brackets 

console.log(addTwo(3,4));



const myArray=[2,4,5,6,8]
// myArray.forEach









