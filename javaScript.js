const container = document.querySelector('#container');


const playScore = document.createElement('p');
playScore.classList.add('playScore');

const compScore = document.createElement('p');
compScore.classList.add('compScore');

const score = document.createElement('div');
score.classList.add('score');

const buttons = document.querySelectorAll('button');

playScore.textContent = `Player: ${playerScore}`;
container.appendChild(playScore);
compScore.textContent = `Computer: ${computerScore}`;
container.appendChild(compScore);

buttons.forEach((button) => {
    
    button.addEventListener('click', function(e) {

        result = playRound(button.id, computerSelection);
        e.target = getScore(result);


        playScore.textContent = `Player: ${playerScore}`;
        compScore.textContent = `Computer: ${computerScore}`;
        score.textContent = result;

        container.appendChild(playScore);
        container.appendChild(compScore);
        container.appendChild(score);

         // end of game results 
        if(playerScore == 5){
            alert("Congratulations! You won!");
            }
        else if(computerScore == 5){
            alert("You lose! :( Better luck next time.");
        }
    });
        
  });
