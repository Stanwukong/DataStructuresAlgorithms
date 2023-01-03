// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator
/**
 * We have defined a function spreadOut that
 * returns the variable sentence. Modify the
 * function using the spread operator so that it
 * returns the array ['learning', 'to',
 * 'code', 'is', 'fun'].
*/
function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = ['learning', ...fragment, 'is', 'fun'] // Change this line
	return sentence;
  }
  
  console.log(spreadOut());