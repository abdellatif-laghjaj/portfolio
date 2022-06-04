const time = document.getElementById("time");

var currentTime, hours, minutes, seconds, fullTime;

const fullTime = hours + ":" + minutes + ":" + seconds;
setInterval(() => {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  fullTime = hours + ":" + minutes + ":" + seconds;
  time.innerHTML = fullTime;
}, 1000);
