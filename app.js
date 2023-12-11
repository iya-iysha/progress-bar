import apiControl from './api.js';
import { 
  progressRing, 
  progressCircle,
  inputPercent,
  inputAnimate,
  inputVisibility,
  circumference,
  classRingHidden,
  classCircleAnimated
} from './utils/constants.js';
import { setProgress, checkPercentValue } from './utils/utils.js';

let storage = {
  percent: 0,
  visibility: false,
  animate: false
}

progressCircle.style.strokeDashoffset = circumference;
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;

inputPercent.addEventListener('change', () => {
  storage.percent = apiControl.getPercent();
  setProgress(checkPercentValue(storage.percent));
});

inputVisibility.addEventListener('change', () => {
  storage.visibility = apiControl.getVisibilityValue();
  progressRing.classList.toggle(classRingHidden);
});

inputAnimate.addEventListener('change', () => {
  storage.animate = apiControl.getAnimateValue();
  progressCircle.classList.toggle(classCircleAnimated);
})