// A = (8*Math.sqrt(2))/(Math.pow(Math.pi,2))
const constantTerm = (8 * Math.sqrt(2))/(Math.pow(Math.PI,2));

// f(x) = sum from k=1 to 10 of ((-1)^((k^2+k+2)/2)*sin((2k-1)x))/((2k-1)^2)
const trapezoidWaveSum = (x: number) => {
  let value = 0;
  for(let i = 1; i<=10; i+=1){
    value += ( Math.pow(-1, (Math.pow(i, 2)+i+2)/2 )*Math.sin((2*i-1)*x)) / ( Math.pow((2*i-1),2) );
  }
  return value;
};

// g(x) = A * f(x)
const trapezoidWave = (x: number) => constantTerm * trapezoidWaveSum(x);

export default trapezoidWave;