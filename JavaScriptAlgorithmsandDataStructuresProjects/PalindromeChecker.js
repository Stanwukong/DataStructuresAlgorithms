// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
function palindrome(str) {
	let regex = /[A-Za-z0-9]+/g;
	let target = str.match(regex).join("").toLowerCase();
	return (target == target.split('').reverse().join(''))
  }
  
  console.log(palindrome("eye"));