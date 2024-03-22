// generate random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());

let intervalId;
const startChangingColor = () => {

     changeBgColor=()=>{
     document.body.style.backgroundColor=randomColor()
 }
 if (!intervalId) {
     intervalId= setInterval(changeBgColor,10)//stop krene k liye refrence lena hoga
    
 }




   };
const stopChangingColor = () => {
    clearInterval(intervalId)
    // document.body.style.backgroundColor="#212121";//ye krne k bjae intervalid ko null krdo. code cleaner b hoga and variable memory b clean hogi
    intervalId=null
    console.log("stoppppped");
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
