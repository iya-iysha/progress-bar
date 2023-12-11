import {
  inputPercent,
  inputAnimate,
  inputVisibility,
} from './utils/constants.js';

const apiControl = {
  getPercent: () => {
    return inputPercent.value;
  },

  getVisibilityValue: () => {
    return inputVisibility.checked;
  },

  getAnimateValue: () => {
    return inputAnimate.checked;
  }
};

export default apiControl;