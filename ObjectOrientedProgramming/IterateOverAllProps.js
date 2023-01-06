// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties
/**
 * Add all of the own properties of beagle to the
 * array ownProps. Add all of the prototype
 * properties of Dog to the array prototypeProps.
*/
function Dog(name) {
	this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let ans in beagle) {
	if (beagle.hasOwnProperty(ans)) {
	  ownProps.push(ans);
	} else {
	  prototypeProps.push(ans);
	}
  }