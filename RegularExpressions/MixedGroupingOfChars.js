// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works