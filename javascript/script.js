var homeDisplay = document.querySelector("#home-page");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector(".nav-item");
//Hide selected content on page
function toggleDisplay(content){
    if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
}

function startQuiz(){
    toggleDisplay(homeDisplay);
    
  
}

startBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", startQuiz);