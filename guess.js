let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a more than 1");
  } else if (guess > 100) {
    alert("please enter a less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      cleanUpGuess(guess);
      displayMessage(`game over. random number was ${randomNumber}`)
      endGame()
    }else{
        cleanUpGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess===randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
  }else if (gess<randomNumber){
    displayMessage(`number is too low`)
  }
  else if (gess>randomNumber){
    displayMessage(`number is too high`)
  }
}
function cleanUpGuess(guess) {
  userInput.value=""
 guessSlot.innerHTML+=` ${guess}`
 numGuess++
 remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML=`<h3>${message}</h3>`
}

function endGame() {
  userInput.value=""
  userInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame() {
  const newGameButton=document.querySelector("#newGame")
  newGameButton.addEventListener("click",(e)=>{
    randomNumber=parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=""
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    
    
    
    playGame=true
  })
}
