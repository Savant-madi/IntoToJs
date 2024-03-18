const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  }
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  }
  else{
    const bmi=(weight/((height*weight)/1000)).toFixed(2)
    //show the result

    results.innerHTML=`<span>${bmi}</span>`
        if (bmi<18.6) {
           res.innerHTML="you are under weight";
        }
        else if (bmi>18.6&& bmi<24.9) {
            res.innerHTML="you normal weight";
        }
        else if (bmi>24.9) {
            res.innerHTML="you are over weight";
        }
     
        

  }




});
