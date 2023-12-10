const progressRing = document.querySelector('.progress-bar__ring');
const progressCircle = document.querySelector('.progress-bar__circle');
const inputPercent = document.querySelector('.progress-bar__percent-input');
const inputAnimate = document.querySelector('.progress-bar__animate-input');
const inputVisibility = document.querySelector('.progress-bar__visibility-input');

let percent = 0;
const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;

progressCircle.style.strokeDashoffset = circumference;
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;

const setProgress = (percent) => {
  const offset = circumference - percent / 100 * circumference;
  progressCircle.style.strokeDashoffset = offset;
};

inputPercent.addEventListener('change', () => {
  percent = inputPercent.value;
  if (percent > 100) {
    percent = 100;
    console.log('Введите значение от 0 до 100');
  } else if (percent < 0) {
    percent = 0;
    console.log('Введите значение от 0 до 100');
  }
  setProgress(percent);
});

inputVisibility.addEventListener('change', () => {
  progressRing.classList.toggle('progress-bar__ring_hidden');
});

inputAnimate.addEventListener('change', () => {
    progressCircle.classList.toggle('progress-bar__circle_animated');
})