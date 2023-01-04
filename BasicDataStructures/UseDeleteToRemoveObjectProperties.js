// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-the-delete-keyword-to-remove-object-properties
/**
 * Use the delete keyword to remove the
 * oranges, plums, and strawberries keys
 * from the foods object.
*/
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
  };
  
  // Only change code below this line
	delete foods.oranges;
	delete foods.plums;
	delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);