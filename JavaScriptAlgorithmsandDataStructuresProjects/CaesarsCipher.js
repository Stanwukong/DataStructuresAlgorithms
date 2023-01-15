// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	let newString =  "";
  
	for (let i = 0; i < str.length; i++) {
	  let index = alphabet.indexOf(str[i]);
	  if (index == -1) {
		newString += str[i];
	  } else {
		let newIndex = (index + 13) % 26;
		 newString += alphabet[newIndex];
	  }
	}
	return newString;
  }
  
  console.log(rot13("SERR PBQR PNZC"));