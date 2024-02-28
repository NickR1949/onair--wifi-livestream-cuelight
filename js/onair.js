/* onair javascript 
 * version 1.0.0 23/02/2024
 * by © Nick Rutt
 * 
Status lights -
Status:
  0:Uninitialised
  1:Offline
  2:Standby
  3:start Countdown
  4:8 Sec
  5:6 Sec
  6:4 Sec
  7:2 Sec
  8: Go Onair
  9: Onair
*/
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 5;
const ALERT_THRESHOLD = 2;
const TIME_LIMIT = 10;


const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "yellow",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

var timePassed = 0;
var btn = document.getElementById('status_btn');
var img = document.getElementById('status_img');
var pbtn = document.getElementById('pause_count');
var app = document.getElementById('app');
var btpr = document.getElementById("base-timer-path-remaining");



function callback(){
  //callback
  
  btn.textContent = 'Go Offline';
  
  img.src="Img/OnAir.gif";
  btn.className = "GoOff";
  btn.style.display="inline";
  app.style.display="none";
  sendData('8');
  setTimeout(function(){sendData('9')},2000);
  
}
  

function countdown() {

timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

app.innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      TIME_LIMIT )}</span>
  </div>
  `;
  btpr = document.getElementById("base-timer-path-remaining");
  startTimer();
  return
 
  }

function onTimesUp() {
  clearInterval(timerInterval);
  callback();
}

function startTimer() {
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  sendData('3')
 
  timerInterval = setInterval(() => {
  //  if (timeLeft > WARNING_THRESHOLD) {
      timePassed = timePassed += 1;
  //  }  
  //  else {
  //    if (pause==false){
  //      timePassed = timePassed += 1;
  //  }
  //  }
    timeLeft = TIME_LIMIT - timePassed;
    if (timeLeft >> 0) {
      if(timeLeft == 2) {
        sendData('7');
      }
      else if (timeLeft == 4) {
        sendData('6');
      }
      else if (timeLeft == 6)  {
        sendData('5');
      }
      else if (timeLeft == 8)  {
        sendData('4');
      }
    }
 
    
    
    
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    
        

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;



  return `${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    btpr.classList.remove(warning.color);
    btpr.classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    btpr.classList.remove(info.color);
    btpr.classList.add(warning.color);
  }
}


function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
  calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
  btpr.setAttribute("stroke-dasharray", circleDasharray);
}  
      
    

function bigButton() {
 if (btn.className == 'Standby'){
    btn.textContent = 'Go Camera';
    sendData('2');
    btn.className = 'GoOn';

    img.src="Img/Standby.gif";

  }
  else if (btn.className == 'GoOn'){
    
    /*Countdown Code here */
    btn.style.display = "none";
    app.style.display="inline";
    countdown();
    
  }
  else {
    btn.textContent = 'Go Titles';
    sendData('1');
    btn.className = 'Standby';
    img.src="Img/OffAir.gif";
    
  }

}




