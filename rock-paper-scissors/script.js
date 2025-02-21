let score = JSON.parse(localStorage.getItem("score"));
let result;
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    tie: 0,
  };
}
function updateScore(result) {
    console.log(result);
  document.querySelector(
    ".js-score"
  ).innerHTML =`${result}`;
}



function logic(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = `Tie <br> both chose <img
          src="assets/${playerChoice}.png"
          alt='${playerChoice}'
          class="result-btn"
        />`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `Win! <br> 
        you
        <img
          src="assets/${playerChoice}.png"
          alt='${playerChoice}'
          class="result-btn"
        />
        computer
        <img
          src="assets/${computerChoice}.png"
          alt='${computerChoice}'
          class="result-btn"
        />

        `;
    } else {
        result = `Lose! <br>
        you
        <img
          src="assets/${playerChoice}.png"
          alt='${playerChoice}'
          class="result-btn"
        />
        computer
        <img
          src="assets/${computerChoice}.png"
          alt='${computerChoice}'
          class="result-btn"
        />
        `;
    }
    if (result.startsWith("Win")) {
      score.wins += 1;
    } else if (result.startsWith("Lose")) {
      score.losses += 1;
    } else if (result.startsWith("Tie")) {
      score.tie += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));
    updateScore(result);
    


    
}
const arr1 = [2, 4, 3, 4];
console.log(arr1[1]);
arr1[6] = "banana";
console.log(arr1);

  
