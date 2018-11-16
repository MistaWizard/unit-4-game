var winCounter = 0;
var lossCounter = 0;

// Function used to start the game
function startGame() {
    // Determine the random Pokedex number and write it to the proper section of the html
    pokedexNumber = Math.floor(Math.random() * 102) + 19;
    document.getElementById("pokeNumber").innerHTML = " " + pokedexNumber;
  }

  // Our function to add Pokemon Pokedex numbers to determine player score
// function  {

//   }

//   // Function to finish the round and determine if the player wins or loses and ends the round
// function roundComplete() {
//     console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter);
//     document.getElementById("").innerHTML = numGuesses;
//     document.getElementById("").innerHTML = blanksAndSuccesses.join(" ");
//     document.getElementById("").innerHTML = wrongGuesses.join(" ");
    
//     if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
//       winCounter++;
//       alert("You win!");
//       document.getElementById("win-counter").innerHTML = winCounter;
//       startGame();
//     }
  
//     else if (numGuesses === 0) {
//       lossCounter++;
//       alert("You lose");
//       document.getElementById("loss-counter").innerHTML = lossCounter;
//       startGame();
//     }
//   }

  startGame();