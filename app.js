const newYear = "03/23/2023";

const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const timeCountDown = () => {
  const newDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - newDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  dayEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
};

function formatTime(time) {
  return time > 9 ? time : `0${time}`;
}

timeCountDown();
setInterval(timeCountDown, 1000);
