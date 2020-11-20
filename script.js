var scoreEl = [document.getElementById('score--0'), document.getElementById('score--1')]
var currentScore = [document.getElementById('current--0'), document.getElementById('current--1')] // Elements
var diceEl = document.querySelector('.dice')
var player0Section = document.querySelector('.player--0') 
var player1Section = document.querySelector('.player--1') 

// buttons
var btnNew = document.querySelector('.btn--new')
var btnRoll = document.querySelector('.btn--roll')
var btnHold = document.querySelector('.btn--hold')

// beginning condition
var scores = [0, 0]
var activePlayer = 0
var holder = 0 // holds the points when dice isn't 1 and the player keeps rolling the dice
var gameIsPlaying = true
scoreEl[0].textContent = 0 // it is 43 which comes from the HTML file but prefer to change it here and practice
scoreEl[1].textContent = 0 // same, it was 24
diceEl.classList.add('hidden')





function dice1OrNot(dice) {
    if(dice !== 1) {
        document.getElementById('current--' + activePlayer).textContent = holder += dice
        scores[activePlayer] += dice
        diceEl.classList.remove('hidden')
        diceEl.src = 'dice-' + dice + '.png'
    } else{
        diceEl.classList.remove('hidden')
        diceEl.src = 'dice-1.png'
        scores[activePlayer] = 0
        switchPlayer()        
    }
    
}


function btnRollHandler() {
    if(gameIsPlaying) {
        var dice = Math.floor(Math.random() * 6) + 1
        dice1OrNot(dice)
    }
}


function switchPlayer() {
    document.getElementById('current--' + activePlayer).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    holder = 0
}


// if "current" is 0 and you click on "hold" button - you lose 5 points and it's the other player's turn
function current0() {
    if(currentScore[activePlayer].textContent === '0') {
        alert("You lose 5 points if you hold your score when the current is 0!")
        scores[activePlayer] -= 5
    }
}


// when click on hold button it gets executed and whether, you win(points >= 100) or adds the score on yours and switches to the other player
function gameCondition() {
    current0()
    scoreEl[activePlayer].textContent = scores[activePlayer]
    if(parseInt((scoreEl[activePlayer]).textContent = scores[activePlayer]) >= 10) {
        document.querySelector('.player--' + activePlayer).classList.add('player--winner')
        gameIsPlaying = false
        document.getElementById('current--' + activePlayer).textContent = 0      
        diceEl.classList.add('hidden')
    } else{
      switchPlayer()
    }
}


function btnHoldHanddler() {
    if(gameIsPlaying) {
        gameCondition()
    }
}


// resetting the UI when clicking on "New Game"
function btnNewHandler() {
    activePlayer = 0
    scoreEl[0].textContent = 0
    scoreEl[1].textContent = 0
    currentScore[0].textContent = 0
    currentScore[1].textContent = 0
    scores[0] = 0
    scores[1] = 0
    holder = 0
    gameIsPlaying = true
    player0Section.classList.remove('player--winner')
    player1Section.classList.remove('player--winner')
    document.querySelector('.player--' + activePlayer).classList.add('player--active')   
}


btnRoll.addEventListener('click', btnRollHandler)
btnHold.addEventListener('click', btnHoldHanddler)
btnNew.addEventListener('click', btnNewHandler)

