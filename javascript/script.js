var homeDisplay = document.querySelector("#home-page");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector(".nav-item");
var secondsLeft = 120;
var timerEl = document.createElement("h3");
timerEl.textContent = "Timer: " + secondsLeft;
document.body.appendChild(timerEl);
var secondsLeft = 120;

//Hide selected content on page
function toggleDisplay(content){
    if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
}

function timer(){
var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

function startQuiz(){
    toggleDisplay(homeDisplay);
    timer();
  
}

startBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", startQuiz);
