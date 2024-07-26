var timer = 60;
var hit = 0;
var score = 0;

function makeBubble() {
  var clustter = "";

  for (var i = 0; i < 162; i++) {
    var rn = Math.round(Math.random() * 10);
    clustter += `<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#pndw").innerHTML = clustter;
}

function getNewhit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hit;
}

function runTimer() {
  var rTime = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(rTime);
      document.querySelector(
        "#pndw"
      ).innerHTML = `<h1 id="Done">game over</h1>`;
    }
  }, 1000);
}

function scoreH() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

// eventListener

document.querySelector("#pndw").addEventListener("click", function (detail) {
  var clickednum = Number(detail.target.textContent);

  if (clickednum == hit) {
    scoreH();
    makeBubble();
    getNewhit();
  }
});

getNewhit();
runTimer();
makeBubble();
