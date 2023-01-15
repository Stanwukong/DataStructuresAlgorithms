// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
function telephoneCheck(str) {
	let regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
  
	return regEx.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));