const paper = document.querySelector('#paper');
paper.addEventListener('click', function(e){
    e.target = playRound("paper",computerSelection);
});

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(e){
    e.target = playRound("rock",computerSelection);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(e){
    e.target = playRound("scissors",computerSelection);
});

const score = document.createElement('div');
score.classList.add('score');
