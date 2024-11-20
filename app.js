var msecCounter = 0;
var secCounter = 0;
var minCounter = 0;
var startbutton = document.getElementById("startbutton");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var counter = 0;
var interval;

function timer() {
  msecCounter++;
  msec.innerHTML = msecCounter;
  //   console.log(msecCounter);
  if (msecCounter === 100) {
    secCounter++;
    sec.innerHTML = secCounter;
    msecCounter = 0;
    if (secCounter === 60) {
      secCounter = 0;
      minCounter++;
      min.innerHTML = minCounter;
    }
  }
}

function startTimer(e) {
  interval = setInterval(timer, 100);
  startbutton.disabled = true;
}

function stopTimer(e) {
  clearInterval(interval);
  startbutton.disabled = false;
}

function resetTimer() {
  clearInterval(interval);
  startbutton.disabled = false;

  min.innerHTML = "00";
  sec.innerHTML = "00";
  msec.innerHTML = "00";
  secCounter = 0;
  minCounter = 0;
  startbutton.disabled = false;

  msecCounter = 0;
}
