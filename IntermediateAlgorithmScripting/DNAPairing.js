// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
function pairElement(str) {
	// create object for pair lookup
	const pairs = {
	  A: "T",
	  T: "A",
	  C: "G",
	  G: "C"
	};
  
	// map character to array of character and matching pair
	return str
		   .split("")
		   .map(x => [x, pairs[x]])
  }
  
  console.log(pairElement("GCG"));