// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
function titleCase(str) {
	let word = str.split(" ");
	let updatedWord = [];
	for (let wrd in word) {
	  updatedWord[wrd] = word[wrd][0].toUpperCase() + word[wrd].slice(1).toLowerCase()
	  }
	  return updatedWord.join(" ");
	}
  
  
  titleCase("I'm a little tea pot");