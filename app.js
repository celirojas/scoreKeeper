const player1btn = document.querySelector('#p1btn');
const player2btn = document.querySelector('#p2btn');
const player1display = document.querySelector('#display1');
const player2display = document.querySelector('#display2');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');


let winningScore = 3;
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

player1btn.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            player1display.classList.add('winner');
            player2display.classList.add('loser');
            isGameOver = true;
            player1btn.setAttribute('disabled', true);
            player2btn.setAttribute('disabled', true);
            player1btn.classList.add('hover');
            player2btn.classList.add('hover');
        }
        player1display.textContent = p1Score;
    }
})
player2btn.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            player2display.classList.add('winner');
            player1display.classList.add('loser');
            isGameOver = true;
            player1btn.setAttribute('disabled', true);
        player2btn.setAttribute('disabled', true);
        player1btn.classList.add('hover');
        player2btn.classList.add('hover');
        }
        player2display.textContent = p2Score;
    }
})
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})


resetBtn.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1display.textContent = p1Score;
    player2display.textContent = p2Score;
    player1display.classList.remove('winner', 'loser');
    player2display.classList.remove('winner', 'loser');
    player1btn.removeAttribute('disabled');
    player2btn.removeAttribute('disabled');
    player1btn.classList.remove('hover');
    player2btn.classList.remove('hover');

}

