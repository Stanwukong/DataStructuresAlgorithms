// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
const Person = function(firstAndLast) {
	// Only change code below this line
	let fullName = firstAndLast;
  
	// Complete the method below and implement the others similarly
   this.getFirstName = function() {
	  return fullName.split(" ")[0];
	};
  
	this.getLastName = function() {
	  return fullName.split(" ")[1];
	};
  
	this.getFullName = function() {
	  return fullName;
	};
  
	this.setFirstName = function(name) {
	  fullName = name + " " + fullName.split(" ")[1];
	};
  
	this.setLastName = function(name) {
	  fullName = fullName.split(" ")[0] + " " + name;
	};
  
	this.setFullName = function(name) {
	  fullName = name;
	};
	return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.getFullName());