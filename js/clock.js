function updateTime() {
  // Get the current date and time
  var now = new Date();

  // Extract the hours, minutes, and seconds from the date object
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add a leading zero to the hours, minutes, and seconds if they are less than 10
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  // Update the clock display
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}
setInterval(updateTime, 1000);