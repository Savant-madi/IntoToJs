// Immediatly Invoked Function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();  // IIFE ko pata ni chtla k code end kahan krna so ; lagana h phr if more than one IIFE use krne ho

//global scope ki excution se sometimes problem hoti to us se bachne k liye IIFE use krte hn jo delacre hone k foran bd execute hota h

// ()()// first bracket mn function declare krna and second one ko uss k aage lga dena

((name)=>{ //jb parameter pass krne hn 
    console.log(`DB connected 2 ${name}`);
})("Hammad")
