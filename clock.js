

// let minute = a.getMinutes();
// let second = a.getSeconds();
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const amPmEl = document.getElementById("am-pm");
setInterval(function() {
let a = new Date();
let hour = a.getHours();
let minute = a.getMinutes();
let second = a.getSeconds();
const amPm = (hour < 12 ? "AM" : "PM");
amPmEl.innerHTML = amPm;
if(hour > 12) {
  hour -= 12;
}
if(hour === 0) {
  hour = 12;
} if(hour < 10) {
  hour = '0' + hour;
}
if(minute < 10){
  minute = '0' + minute;
} 
if(second < 10) {
  second = '0' + second;
}
hourEl.innerHTML = hour;
minuteEl.innerHTML = minute;
secondEl.innerHTML = second;
})