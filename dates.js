//dates
let myDate=new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let myCreatedDate= new Date(2023,0,23)
// let myCreatedDate= new Date(2023,0,23,5,2,4)
// let myCreatedDate= new Date('2023-01-14')
let myCreatedDate= new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //converting milli seconds to seconds

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1); //will start from zero


// console.log(`${newDate.getDate()} and the time is`);

//for specific style use the following:
console.log(newDate.toLocaleString("default",{
    // weekday:"narrow",
   timeZone:"America/New_York"
}));





