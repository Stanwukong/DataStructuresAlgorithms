/**
 * You want to find matches when the letter s occurs
 * one or more times in Mississippi. Write a regex
 * that uses the + sign.
*/
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);