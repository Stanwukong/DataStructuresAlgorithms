// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
const squareList = arr => {
	// Only change code below this line
	let newArr = [];
	newArr = arr.filter(num => num > 1 && num % parseInt(num) === 0).map(num => Math.pow(num, 2))
	return newArr;
	// Only change code above this line
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);