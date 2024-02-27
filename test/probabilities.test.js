const calculateProbabilities = require("../src/probabilities");

const probabilities = [
  0.4999999999999999, 0.5714285714285716, 0.49999999999999983, 0.5555555555555558,
  0.4999999999999998, 0.5454545454545456, 0.4999999999999998, 0.5384615384615388,
  0.4999999999999998, 0.5333333333333335, 0.4999999999999998, 0.5294117647058826,
  0.4999999999999998, 0.5263157894736845, 0.49999999999999967, 0.5238095238095242,
  0.49999999999999967, 0.5217391304347829, 0.4999999999999997, 0.5200000000000002,
  0.4999999999999998, 0.5185185185185188, 0.4999999999999997, 0.5172413793103451,
  0.4999999999999997, 0.5161290322580647, 0.4999999999999998, 0.5151515151515154,
  0.4999999999999998, 0.5142857142857145, 0.49999999999999983, 0.5135135135135138,
  0.49999999999999967, 0.5128205128205131, 0.4999999999999997, 0.5121951219512197,
  0.4999999999999998, 0.5116279069767444, 0.4999999999999998, 0.5111111111111113,
  0.49999999999999983, 0.5106382978723406, 0.4999999999999998, 0.5102040816326533,
  0.4999999999999998, 0.5098039215686276, 0.4999999999999998, 0.5094339622641512,
  0.4999999999999998, 0.5090909090909093, 0.4999999999999998, 0.5087719298245617,
  0.4999999999999997, 0.5084745762711866, 0.4999999999999998, 0.5081967213114756,
  0.4999999999999998, 0.5079365079365081, 0.49999999999999983, 0.5076923076923079,
  0.4999999999999998, 0.5074626865671644, 0.4999999999999998, 0.5072463768115945,
  0.4999999999999998, 0.507042253521127, 0.49999999999999983, 0.5068493150684934,
  0.4999999999999998, 0.5066666666666669, 0.4999999999999997, 0.5064935064935067,
  0.4999999999999999, 0.5063291139240508, 0.4999999999999999, 0.5061728395061729, 0.5,
  0.5060240963855421, 0.5, 0.5058823529411764, 0.5, 0.5057471264367817, 0.49999999999999994,
  0.5056179775280899, 0.5, 0.5054945054945055, 0.5, 0.5053763440860215, 0.5, 0.5052631578947369,
  0.5, 0.5051546391752577, 0.5, 0.5050505050505051,
];

test("The result returned by the function can only be an array", () => {
  expect(Array.isArray(calculateProbabilities())).toBe(true);
});

test("Each element of the array must be of numeric type", () => {
  expect(calculateProbabilities().every((item) => typeof item === "number")).toBe(true);
});

test("The araay must contain exactly the necessary values", () => {
  expect(calculateProbabilities()).toEqual(probabilities);
});

test("The resulting array must contain only 94 items", () => {
  expect(calculateProbabilities().length).toBe(94);
});
