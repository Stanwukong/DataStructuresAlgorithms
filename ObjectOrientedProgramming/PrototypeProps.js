// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code
// Add a numLegs property to the prototype of Dog
function Dog(name) {
	this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");