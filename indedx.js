const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const result = document.getElementById('result');
const inputValue = document.getElementById('kick');
const btnRestart = document.getElementById('btnRestart');

const GuessNumber = {
  max: 10,
  attemptsNumber: 0,
  numberDrawn: function() {
    return Math.round(Math.random() * this.max);
  },
  playAgain: function() {
    btnRestart.style.display = 'flex';
  },
  clear: function() {
    inputValue.value = '';
  },
  updateAttempt: function(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
  },
  correctAnswear: function() {
    GuessNumber.playAgain();
    statusTitle.innerHTML = 'Parabéns, você acertou!';
    statusTitle.classList.remove('incorrect-answear');
    statusTitle.classList.add('status-correct');

    result.classList.remove('result-box-deafult');
    result.classList.add('result-correct-answear');
    
    GuessNumber.clear();
  },
  incorrectAnswear: function(message) {
    statusTitle.innerHTML = message;
    statusTitle.classList.add('incorrect-answear');
    
    GuessNumber.clear();
  }
};

const numberDrawn = GuessNumber.numberDrawn();

function handleSubmit(e) {
  e.preventDefault();

  const kick = inputValue.value;

  if(!kick) {
    alert('Digite algum valor!');
    return;
  };

  GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber);

  if(numberDrawn == kick) {
    GuessNumber.correctAnswear();
  } else if(numberDrawn > kick) {
    GuessNumber.incorrectAnswear('O número é maior!');
  } else if(numberDrawn < kick) {
    GuessNumber.incorrectAnswear('O número é menor!');
  }
};

function restart() {
  document.location.reload(true);
};