const bodyChangeColor = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

let changeColorId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  changeColorId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
});

stopBtn.addEventListener('click',() => {
  clearInterval(changeColorId);
  stopBtn.disabled = true;
  startBtn.disabled = false; 
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};