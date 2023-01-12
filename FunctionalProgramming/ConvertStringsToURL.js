// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs
// Only change code below this line
function urlSlug(title) {
	return title
	  .toLowerCase()
	  .trim()
	  .split(/\s+/)
	  .join("-");
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));