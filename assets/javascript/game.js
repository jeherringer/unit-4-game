/* Variables needed:
    - var chosenNumber (random number chosen for user)
    - var userNumber (array that adds up total points for user)
    - var userWins (variable to track number of wins)
    - var userLosses (variable to track user loses)
    - var for each of the crystals and their respective point totals and reset with new values

We need to generate an on.click function to choose a random number at the start of the game.
We need a on.click function to push the point total of each crystal into the userNumber array
We need an if/else statement to compare the userNumber to the chosenNumber and react accordingly 
    with wins/losses
We need the game to choose another random number after each round
*/

// Variables needed:
var userWins = 0;
var userLosses = 0;

var fruitChoice1 = random();
var fruitChoice2 = random();
var fruitChoice3 = random();
var fruitChoice4 = random();

var totalScore = 0;
var computerChoice = computerRandom ();

var count=30;

// random function will pick a random number for each fruit when clicked on
function random() {
    return Math.floor(Math.random() * (12-1+1)) + 1;
}

function computerRandom() {
    return Math.floor(Math.random() * (120 -19 + 1)) + 19;
}

function numberAdder(fruitNumber) {
    totalScore += fruitNumber;
    console.log("new total is: " + totalScore);
    update();
    compare(totalScore, computerChoice);
    return totalScore;
}

function compare(totalScore, computerChoice) {
    if (totalScore === computerChoice) {
        userWins++;
        alert("You win! Nice job!");
        reset();
    }
    else if ((totalScore > computerChoice) && (totalScore !== 0)) {
        userLosses++;
        alert("You lose! Try again!");
        reset();
    }
}

function reset() {
    computerChoice = computerRandom();
    fruitChoice1 = random();
    fruitChoice2 = random();
    fruitChoice3 = random();
    fruitChoice4 = random();
    totalScore = 0;
    count = 30;
    if (userWins >= 3) {
        count = 20;
      }
    
    if (userWins >= 5) {
        count = 10;
    }
    
    
    timer();
    update();
}

function update () {
    $("#computerChose").text(computerChoice);
    $("#wins").text(userWins);
    $("#losses").text(userLosses);
    $("#userPoints").text(totalScore);
    $("#countdown").text(count);
}

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count=count-1

    if (count == 0) {
        alert("You ran out of time!");
        userLosses++;
        reset();
    }
    if (count <= 0) {
        clearInterval(counter);
        return;
  }
  

    $("#countdown").text(count);
}



$(document).ready(function () {
    reset();
    update();
    
    $("#computerChose").text(computerChoice); 
   
    $("#imageOne").on("click", function () { 
      console.log('Fruit 1: ' + fruitChoice1); 
      numberAdder(fruitChoice1); 
    });
  
    $("#imageTwo").on("click", function () {
      console.log('Fruit 2: ' + fruitChoice2);
      numberAdder(fruitChoice2);
    });
    
    $("#imageThree").on("click", function () {
      console.log('Fruit 3: ' + fruitChoice3);
      numberAdder(fruitChoice3);
    });
    
    $("#imageFour").on("click", function () {
      console.log('Fruit 4: ' + fruitChoice4);
      numberAdder(fruitChoice4);
    });
    
  });





