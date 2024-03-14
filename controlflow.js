//logic or control flow
//if switch

// const isUserLoggedIn= true
// if (isUserLoggedIn) {

// }

// falsy values

// false, 0, -0,BigInt 0n, "", null,undefined, NaN

// //other than these are truthy value

// [], "0", "false"," ",{}, function(){}//empty function

//checking if array is empty

const array = [];

if (array.length === 0) {
  console.log("array is empty");
}

//checking if object is empty

const myobj = {};

if (Object.keys(myobj).length === 0) {
  //for checking object you first have to change it into array then use length method
  console.log("object is empty");
}

//nullish coalescing operator (??) null undefined it helps when we get errors like null and undefined act as safety measure

let val1;
// val1 = 5 ?? 10;
// val1= null ?? 20
val1 = undefined ?? 10;
// val1= null??undefined
val1 = null ?? 10 ?? 20;
console.log(val1);

//terniary operator

// condition ? true :false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
