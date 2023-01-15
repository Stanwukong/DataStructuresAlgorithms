// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
function destroyer(arr) {
	const toRemove = Array.from(arguments).slice(1);
	let pew = arr.concat(toRemove);
	let ans = pew.filter(item => (!toRemove.includes(item)))
	return ans;
  }
  console.log(
  destroyer([1, 2, 3, 1, 2, 3], 2, 3));