// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
function confirmEnding(str, target) {
	let answer;
	answer = str.slice(str.length - target.length) === target;
	return answer;
  }
  
  console.log(confirmEnding("Bastian", "n"));