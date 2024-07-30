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
  var timer = 60;
  var rTime = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(rTime);
      document.querySelector("#pndw").style.display = "none";
      document.querySelector("#result").style.display = "flex";
      document.querySelector("#gameSound").pause();
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
  } else {
    document.querySelector("#hitS").play();
  }
});

function loadScreen() {
  document.querySelector("#btnStart").addEventListener("click", () => {
    document.querySelector("#start").style.display = "none";
    document.querySelector("#panel").style.display = "block";
    document.querySelector("#pndw").style.display = "flex";
    document.querySelector("#result").style.display = "none";
    document.querySelector("#gameSound").play();

    getNewhit();
    runTimer();
    makeBubble();
  });
}

document.querySelector("#restart").addEventListener("click", () => {
  document.querySelector("#panel").style.display = "block";
  document.querySelector("#pndw").style.display = "flex";
  document.querySelector("#result").style.display = "none";
  document.querySelector("#gameSound").play();

  score = 0;
  document.querySelector("#score").textContent = score;
  getNewhit();
  runTimer();
  makeBubble();
});

loadScreen();
