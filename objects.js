//singleton
Object.create; // through construct

//object literals non singleton like const jsUser={}

// const mySym=Symbol("key1") //it will have athat's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object like creating the symbol with the same variable will not be same
// const jsUser={
//     name:"Hammad",
//     "full name": "Hammad Ali",
//     [mySym]:"mykey1",
//     age: 26,
//     location:"pak",
//     email:"@.com",
//     isloggedIn: false
// }
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

// jsUser.greeting=function(){
//     console.log("hello");

// }
// jsUser.greeting2=function(){
//     console.log(`hello, ${this.age}`);// using this you can access the object in a function
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());

const app = new Object();
app.id = "123abc";
app.name = "hammd";
app.isLoggedIn = false;

// console.log(app);

const regularUser = {
  //nesting objects
  email: "some@",
  fullName: {
    userFullName: {
      firstName: "Hammmad",
      lastName: "ali",
    },
  },
};

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

const obj3={obj1,obj2}// same array issue 
// console.log(obj3);

// const obj4=Object.assign({},obj1,obj2) //merging two objects like this the {} is used for safety measure the {} act as target that the values will go there and other objects are used as sources
const obj4={...obj1,...obj2} // mostly use the spread operator
// console.log(obj4);



const users=[ // you will use arrays into object mostly in production value
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },

]

users[1].email
console.log(app);

// console.log(Object.keys(app)); // with this datatype will be array and you can run a loop at it
// console.log(Object.values(app)); // will give only values
// console.log(Object.entries(app)); // will get result in array 


// console.log(app.hasOwnProperty("isLoggedIn")); // for checking the is the property exists

