let timer;
let seconds = 0;

function updateTime() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  document.getElementById('time').innerText = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    updateTime();
  }, 1000);
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
  document.getElementById('reset').disabled = false;
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  updateTime();
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
  document.getElementById('reset').disabled = true;
}
