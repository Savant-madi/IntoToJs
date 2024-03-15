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



const coding=["js","ruby","python","cpp"]
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
const myCoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"python",
        languageFile:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFile);
})







