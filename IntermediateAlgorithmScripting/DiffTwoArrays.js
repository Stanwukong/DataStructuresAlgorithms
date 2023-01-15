// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
function diffArray(arr1, arr2) {
	const newArr = arr1.concat(arr2);
	return newArr.filter(item => (arr1.includes(item) && arr2.includes(item) == false) || (arr2.includes(item) && arr1.includes(item) == false))
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));