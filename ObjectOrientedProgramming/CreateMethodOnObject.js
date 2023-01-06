// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object
/**
 * Using the dog object, give it a
 * method called sayLegs. The method
 * should return the sentence This
 * dog has 4 legs.
*/
let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function() {
	  return "This dog has " + dog.numLegs + " legs."
	}
  };
  
  dog.sayLegs();