// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
function chunkArrayInGroups(arr, size) {
	const newArr = [];
	for (let i = 0; i < arr.length; i += size) {
	  newArr.push(arr.slice(i, i + size));
	}
	return newArr;
  }