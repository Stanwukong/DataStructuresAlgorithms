// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
function repeatStringNumTimes(str, num) {
	let string = "";
	for (let i = 0; i < num; i++) {
	  string += str;
	}
	return string;
  }
  
  console.log(repeatStringNumTimes("abc", 3));