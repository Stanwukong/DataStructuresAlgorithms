// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property
/**
 * Write a joinDogFraternity function that takes a
 * candidate parameter and, using the
 * constructor property, return true if the
 * candidate is a Dog, otherwise return false.
*/
function Dog(name) {
	this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
	if (candidate.constructor === Dog) {
	  return true;
	} else {
	  return false;
	}
  }