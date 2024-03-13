// arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myH = ["hi", "gg", "okay"];
const myArr2 = new Array(1, 2, 3, 4, 44); //creating an array
// console.log(myArr2);

//array methods

myArr.push(6); //adds the value at the last point
myArr.pop(); // removes last value
// console.log(myArr);
// myArr.unshift(9); // adds the number in the start
// console.log(myArr);
// myArr.shift() // removes the first value
// console.log(myArr);

// console.log(myArr.includes(2)); // checks the value
// console.log(myArr.indexOf(2));// this also the value if not in array it will give -1 otherwise tells the index of that value


// const newArr=myArr.join() // it will convert the array into string
// console.log(myArr);
// console.log(newArr);




//slice and splice

// console.log("A",myArr);

// const myn1=myArr.slice(1,3) // slice will give you that specfic range of values you set
// console.log(myn1);
// console.log("B",myArr);

// const myn2=myArr.splice(1,3) // splice removes other value than in the range like in this it will the values at index 1,2,3 and will give 0,4,5
// console.log("C",myArr);
// console.log(myn2);


const mH=["T","I","S"]
const dC=["S","F","B"]
// const aH=mH.push(dC) // push only tells the array size like mh has 4 indexs and adds dc in that array as 1 index
// console.log(mH);
// console.log(mH[3][1]);// gives only this value output

// const aH=mH.concat(dC) //merges both arrays in a single array
// console.log(aH);

// const Ah=[...mH, ...dC] // spread opeator also merges the arrays indexes
// console.log(Ah);


// const anotherArray=[1,2,3,[4,5,6],7,[6,7],[4,5]]

// // const realAnotherArray=anotherArray.flat()// spread all into one
// // console.log(realAnotherArray);

// console.log(Array.isArray(["hammad"]))//check if its an array or not
// console.log(Array.from("hammad")) // makes string or other into array

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));//converts into arrays











