const piecewiseWave = (x: number): number => {
  if(x > 0 && x < 0.8) {
    return 5 * x / 4;
  } else if (x >= 0.8 && x < 2.3) {
    return 1;
  } else if (x >= 2.3 && x <= Math.PI ){
    return -1.18822* x + 3.7329;
  } else {
    return 0;
  }
};

export default piecewiseWave;