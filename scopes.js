
//scope
//values outside the braces are called global scope
// var c =300
// let a =300
// if (true){  // values under braces are called block scope
    
//     let a= 10
//     const b=20
//     console.log("inner:", a);
    
//    }




// console.log(a);
// console.log(b);

//NESTED SCOPE

function one (){
    const userName="hammad"
    function two(){
        const website="youtube"
        // console.log(userName);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const userName="Hammad"
    if(userName==="Hammad"){
        const website="  youtube"
        // console.log(userName + website);
    }

    // console.log(website);
}

// console.log(userName);


//++++++++++++++++++++++++++++++intresting+++++++++++++++++++++++

// console.log(add1(4))

// function add1(num){
//     return num+1
// }



// const add2= function(num){
//     return num+2
// }
// console.log(add2(4));





