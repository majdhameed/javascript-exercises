const add = function(a, b) {
	return (a + b);
};

const subtract = function(a,b) {
  return (a - b);
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) =>{
    sum += number
    return sum;
  }, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((product, number) =>{
    product *= number
    return product;
  }, 1)
};

const power = function(a, b) {
	return (Math.pow(a, b))
};

const factorial = function(a) {
	ans = 1;
  for (i=2; i<=a; i++){
    ans *= i;
  }
  return ans
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
