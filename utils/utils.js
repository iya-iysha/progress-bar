import { circumference, progressCircle } from './constants.js';

const checkPercentValue = (percent) => {
  if (percent > 100) {
    percent = 100;
  } else if (percent < 0) {
    percent = 0;
  }
  return percent
};

const setProgress = (percent) => {
  const offset = circumference - percent / 100 * circumference;
  progressCircle.style.strokeDashoffset = offset;
};

export { setProgress, checkPercentValue };