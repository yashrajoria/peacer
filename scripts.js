const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime/5)*2;
const holdTime = totalTime/5;

bAnimation();

function bAnimation() {
  text.innerText = 'Breathe In !';
  container.className = 'container expand';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out !';
      container.className = 'container collapse';
    }, holdTime)
  }, breatheTime);
}

setInterval(bAnimation, totalTime);