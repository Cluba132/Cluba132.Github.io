function realtimeClock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getminutes();
  var seconds = rtClock.getSeconds();

  var amPm = ( hours < 12 ) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + hours).slice(-2);
  seconds = ("0" + hours).slice(-2);

  document.getElementById('clock').innerHTML =
  hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;

  var t = setTimeout(realtimeClock, 500);

}
