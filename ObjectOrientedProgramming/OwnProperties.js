// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties
/**
 * Add the own properties of canary to the array
 * ownProps.
*/
function Bird(name) {
	this.name = name;
	this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let prop in canary) {
	if (canary.hasOwnProperty(prop)) {
	  ownProps.push(prop)
	}
  }