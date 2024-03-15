//for of

// const arr = [1, 2, 3, 4, 5];
// for (const val of arr) {
//     console.log(val);
// }


// const greeting="hello World"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }


//maps
//map is like objects but it remembers the key and values places and no duplicate are outputted
// const map=new Map()
// map.set("PK","Pakistan")
// map.set("US","United States")
// map.set("Fr","France")
// map.set("Fr","France")
// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key,":-",value);
// }

//map is itteratble while objects are not as shown below but there are other methods to do that
// const myObject={
//     "game1": "NFS",
//     "game2": "GOW"
// }

// for (const [key,value] of myObject) {
//     console.log(key, ":-",value );
// }


// for iterating objects we use for in loop 
const myObject={
    js:"javascript",
    cpp:"c++",
    rb: "ruby",
    py: "python"

}

// for (const key in myObject) {
    
//         console.log(`${key} and its value${myObject[key]} `);
   
// }



// const myArr=["js","ruby","python","java","cpp"]

// for (const key in myArr) { // in array if you just output key then it will show array index like 0,1,2,3,4,5 and with myArr[key] it will show its values
//     console.log(myArr[key]);
// }


//checking for map for in loop


// const map=new Map()
// map.set("PK","Pakistan")
// map.set("US","United States")
// map.set("Fr","France")
// map.set("Fr","France")

// for (const key in map) {//WE CANNOT ITERATE ON MAP
//    console.log(map[key]);
// } 


// for now if want to a loop on array use FOR OF LOOP and for objects use FOR IN LOOP





//for each loop //mostly used



// const coding=["js","ruby","python","cpp"]
// //callback function donot have a name
// // coding.forEach( function (item){
// // console.log(item);
// // })

// coding.forEach((item)=>{
//     console.log(item);
// })


// const printMe=(item)=>{
//     console.log(item);
// }

// coding.forEach(printMe)
// we can check the index and array as well in for each loop
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })



// we can use for each in mutiple objects in an array and get access it key and value in each iteration of objects in array it is mostly used in databases
// const myCoding=[
//     {
//         languageName:"javascript",
//         languageFile:"js"
//     },
//     {
//         languageName:"java",
//         languageFile:"java"
//     },
//     {
//         languageName:"python",
//         languageFile:"py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageFile);
// })



const coding=["js","ruby","python","cpp"]

//undefined 
// const val=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(val);



// const myNums=[1,2,3,4,5,6,7,8,9,10]
// filter uses a callback function and you have to give a condition and will return filter out the values
// const newNums=myNums.filter((num)=> num>5) //if you use arrow fn in a single line then no parenthesis are needed and will return the value automatically but if the statement is long or put in parenthises then YOU MUST USE RETURN OTHERWISE IT WILL GIVE AN EMPTY ARRAY AS AN OUTPUT CHECK IT BELOW


// const newNums=myNums.filter((num)=>{
//     return num>5 // if you dont put "return" it will not return any value will only give you an empty array because when you parenthesis opens a scope 
// })

// const newNums=[]
//if we want to use foreach loop instead of filter then first declare an empty array then use if for conditon and then push(add) the value in the empty array you will get the same answer
// myNums.forEach((num)=>{
//     if (num>5) {
//         newNums.push(num)
//     }

// })
    

// console.log(newNums);

//FILTERS EXAMPLE BELOW
// const books=[{
//     title:"book one",
//     genre:"fiction",
//     publish:1980,
//     edition:2010
// },{
//     title:"book two",
//     genre:"non-fiction",
//     publish:1920,
//     edition:2000
// },
// {
//     title:"book three",
//     genre:"science",
//     publish:1985,
//     edition:2015
// },
// {
//     title:"book four",
//     genre:"fiction",
//     publish:1930,
//     edition:2050
// },
// {
//     title:"book five",
//     genre:"history",
//     publish:1990,
//     edition:2020
// },
// {
//     title:"book six",
//     genre:"science",
//     publish:1934,
//     edition:2040
// }]


// const myBooks=books.filter((bk)=>{
//     return bk.publish>1934
// })

// console.log(myBooks);

// const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num)=>num+10)


//if we want to use for each instead of map
// const newNums=[]
// myNumbers.forEach((num)=>{
//     num=num+10

//     newNums.push(num)
// })
// you can use map and filter more than one time but REMEMBER when you add a second map like below first map will execute and make an array like [10,20,30,40 and so] then the seccond map will add 1 in that first map return values and adds them and show the output IT IS CALLED CHAINING
// const newNums=myNumbers.map((num)=>num*10).map((num)=>num+1)

// console.log(newNums);





//REDUCE METHOD..................


// const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,curval)=>{
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval
// },0)

// console.log(myTotal);


const shoppingCart=[{
    itemName:"js Course",
    price:2900
},
{
    itemName:"mobile dev",
    price:2400
},
{
    itemName:"data science",
    price:29000
},
{
    itemName:"py Course",
    price:2590.4
},]

const priceToPay=shoppingCart.reduce((acc,item)=>{
  return acc+ item.price
},0)
console.log(priceToPay);










































