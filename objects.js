//singleton
Object.create// through construct


//object literals

const mySym=Symbol("key1") //it will have athat's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object like creating the symbol with the same variable will not be same
const jsUser={
    name:"Hammad",
    "full name": "Hammad Ali",
    [mySym]:"mykey1",
    age: 26,
    location:"pak",
    email:"@.com",
    isloggedIn: false
}
// console.log(jsUser.age); // ways for outputing an object
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);//it will return as string unless you put square brakets around it but  its data type will be still be same becuase we are checking the value of that key. 
// console.log(jsUser[mySym]===mySym);// see both have unique values and statment will be false

// console.log(jsUser); //notice the key1 is symbol if you put bracket around it otherwise it will just a key.

// jsUser.email="hammad@gmail.com" // to change the value
// console.log(jsUser["email"]);
// Object.freeze(jsUser); // it will lock the keys and then you cant change it values
// jsUser["full name"]="MHammadAli"
// console.log(jsUser["full name"]);


jsUser.greeting=function(){
    console.log("hello");
    
}
jsUser.greeting2=function(){
    console.log(`hello, ${this.age}`);// using this you can access the object in a function
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());





