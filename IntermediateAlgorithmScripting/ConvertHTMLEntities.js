// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
function convertHTML(str) {
	// Split by character to avoid problems.
  
	let brokenString = str.split("");
  
	// Since we are only checking for a few HTML elements, use a switch
  
	for (let i = 0; i < brokenString.length; i++) {
	  switch (brokenString[i]) {
		case "<":
		  brokenString[i] = "&lt;";
		  break;
		case "&":
		  brokenString[i] = "&amp;";
		  break;
		case ">":
		  brokenString[i] = "&gt;";
		  break;
		case '"':
		  brokenString[i] = "&quot;";
		  break;
		case "'":
		  brokenString[i] = "&apos;";
		  break;
	  }
	}
  
	let temp = brokenString.join("");
	return temp;
  }
  
  //test here
  console.log(convertHTML("Dolce & Gabbana"));