// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
function findLongestWordLength(str) {
	let myArr = str.split(" ");
	let longestWord = "";
	for (let i = 0; i < myArr.length; i++) {
	  if (myArr[i].length >= longestWord.length) {
		longestWord = myArr[i]
	  }
	}
  
	return longestWord.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));