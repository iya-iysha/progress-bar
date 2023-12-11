const classRing = 'progress-bar__ring'
const classRingHidden = 'progress-bar__ring_hidden';
const classCircle = 'progress-bar__circle';
const classCircleAnimated = 'progress-bar__circle_animated';
const classPercentInput = 'progress-bar__percent-input';
const classPercentError = 'progress-bar__percent-error';
const classPercentErrorVisible = 'progress-bar__percent-error_visible';
const classAnimateInput = 'progress-bar__animate-input';
const classVisibilityInput = 'progress-bar__visibility-input';

const regexPercent = /[0-9]/g;

const progressRing = document.querySelector(`.${classRing}`);
const progressCircle = document.querySelector(`.${classCircle}`);
const inputPercent = document.querySelector(`.${classPercentInput}`);
const percentError = document.querySelector(`.${classPercentError}`);
const inputAnimate = document.querySelector(`.${classAnimateInput}`);
const inputVisibility = document.querySelector(`.${classVisibilityInput}`);

const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;

export { 
  regexPercent,
  progressRing, 
  progressCircle,
  inputPercent,
  inputAnimate,
  inputVisibility,
  circumference,
  classRingHidden,
  classCircleAnimated,
  percentError,
  classPercentErrorVisible
};