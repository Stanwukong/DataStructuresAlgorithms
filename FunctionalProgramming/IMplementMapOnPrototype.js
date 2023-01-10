// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype
Array.prototype.myMap = function(callback) {
	const newArray = [];
	// Only change code below this line
	for (let i = 0; i < this.length; i++) {
	  newArray.push(callback(this[i], i, this));
	}
	// Only change code above this line
	return newArray;
  };