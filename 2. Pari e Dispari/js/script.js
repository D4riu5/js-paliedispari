const userNumber = ["<img src='img/1.png'>","<img src='img/2.png'>","<img src='img/3.png'>","<img src='img/4.png'>","<img src='img/5.png'>"];

const computerNumber = ["<img src='img/1.png'>","<img src='img/2.png'>","<img src='img/3.png'>","<img src='img/4.png'>","<img src='img/5.png'>"];

const userShow = document.getElementById("user");
const computerShow = document.getElementById("computer");
const start = document.querySelector(".start");
const showResult = document.getElementById("result");
const reset = document.querySelector(".reset");

// random number function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// is even function
function isEven(num) {
  return num % 2 === 0;
}

// start event
start.addEventListener ('click',

    function game() { 
      const winCondition = document.getElementById("evenOrUneven").value;
      while (winCondition == 'placeholder') {
        alert("seleziona pari o dispari!");
        return;
      }
      const userSelected = document.getElementById("UserSelection").value;
      while (userSelected == 'placeholder') {
        alert("seleziona un numero!");
        return;
      }
      const posUser = userNumber[parseInt(userSelected - 1)];
      userShow.innerHTML = posUser;

      const posComputer = getRandomNumber(0, 4);
      let computerNumberRandomized = computerNumber[posComputer];
      computerShow.innerHTML = computerNumberRandomized;

      let finalComputerPos = parseInt(posComputer) + 1;

      const sum = parseInt(userSelected) + finalComputerPos;
      
      if (isEven(sum) && winCondition == 'Pari'){
        showResult.innerHTML = "User Wins";
      } else if(!isEven(sum) && winCondition == 'Dispari'){
        showResult.innerHTML = "User Wins";
      } 
      else{
        showResult.innerHTML = "Computer Wins";
      }

    }

)

// reset event
reset.addEventListener ('click',
    function(){
      userShow.innerHTML = "";
      computerShow.innerHTML = "";
      showResult.innerHTML = "";
      document.getElementById("UserSelection").value = 'placeholder';
      document.getElementById("evenOrUneven").value = 'placeholder';
    }
)
