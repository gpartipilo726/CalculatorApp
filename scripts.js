console.log("Hello");

//generates random number for computer
let getRandomCompChoice = () => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


//makes computer decision based on random number recieved from getRandomCompChoice
let getComputerChoice = () => {
  let choice = getRandomCompChoice()

  if (choice === 1){
    return "rock";
  }
  else if (choice === 2){
    return "paper";
  }
  else {
    return "scissors";
  }

}

let getHumanChoice = () => {
    return prompt("Pick a choice (rock, paper, or scissors)!");

}


console.log("computer choice is: " + getComputerChoice());
console.log("human choice is: " + getHumanChoice());
