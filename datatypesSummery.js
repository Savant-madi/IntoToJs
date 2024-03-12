//primative and non primative/reference datatypes
//primative //call by value

//7 types: string, Number,boolean,null(empty),undefined,symbol,BigInt

//is java dynamic or static language: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
//Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
const score=100
//refrence datatype: array,objects,functions // their datatype is OBJECTS
//////////////////////////////////////////////////////////////


// stack (primative) in stack you will get a copy of that and orignal change ni hoga  jb k heap mn hoga, Heap(non-primative) memory 

let pOne={
    email:"pOne.com",
    pId:"weqdzxc"
}
let pTwo=pOne

pTwo.email="pTwo.com"


console.log("POne:",pOne.email);
console.log("PTwo:",pTwo.email);

