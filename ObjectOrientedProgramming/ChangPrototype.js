// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object
/**
 * Add the property numLegs and the
 * two methods eat() and describe()
 * to the prototype of Dog by setting
 * the prototype to a new object.
*/
function Dog(name) {
	this.name = name;
  }
  
  Dog.prototype = {
	// Only change code below this line
	numLegs: 4,
	eat: function() {return "yum yum yum"},
	describe: function() {return "This is a " + this.name}
  };
  