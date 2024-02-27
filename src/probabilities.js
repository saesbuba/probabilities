const calculateProbabilities = () => {
  const probabilities = new Array(100).fill(0);

  probabilities[2] = 0.5;

  for (let k = 3; k <= 99; k++) {
    probabilities[k] = 1 / k + (1 - 1 / k) * (1 - probabilities[k - 1]);
  }

  return probabilities.slice(6);
};

console.log(calculateProbabilities());

module.exports = calculateProbabilities;
