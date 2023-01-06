// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof
/**
 * Create a new instance of the House constructor,
 * calling it myHouse and passing a number of
 * bedrooms. Then, use instanceof to verify that it
 * is an instance of House.
*/
function House(numBedrooms) {
	this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(5);
  
  console.log(myHouse instanceof House);