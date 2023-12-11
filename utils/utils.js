import { 
  regexPercent, 
  circumference, 
  progressCircle, 
  percentError, 
  classPercentErrorVisible 
} from './constants.js';

const checkPercentValue = (percent) => {  
  if (percent.match(regexPercent)) {
    percentError.classList.remove(classPercentErrorVisible);
    if (percent > 100) {
      percent = 100;
    }
    return percent
  } else {
    percent = 0;
    percentError.classList.add(classPercentErrorVisible);
  }
  return percent
};

const setProgress = (percent) => {
  const offset = circumference - percent / 100 * circumference;
  progressCircle.style.strokeDashoffset = offset;
};

export { setProgress, checkPercentValue };