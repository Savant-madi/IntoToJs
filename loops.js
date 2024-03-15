// for loops
//while loop
 let myArr=["BT","MT","HT"]

 let arr=0;
 while (arr<myArr.length) {
    console.log(`value is ${myArr[arr]}`);
    arr=arr+1
 }

let score=11
 do { //in do while work is done first then it checks for condition like here when score is 11 it prints out that value and after that it checks for condition thats not met and end the loop
    console.log(`score is: ${score}`);
    score++
 } while (score<=10);