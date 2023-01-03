// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop
/**
 * The following function is supposed to create a two-
 * dimensional array with m rows and n columns of
 * zeroes. Unfortunately, it's not producing the expected
 * output because the row variable isn't being reinitialized
 * (set back to an empty array) in the outer loop. Fix the
 * code so it returns a correct 3x2 array of zeroes, which
 * looks like [[0, 0], [0, 0], [0, 0]].
*/

// Solution 1
function zeroArray(m, n) {
	// Creates a 2-D array with m rows and n columns of zeroes
	let newArray = [];
	let row = [];
	for (let i = 0; i < n; i++) {
	  // Adds the n-th zero into row
	  row.push(0);
	  }
	  for (let j = 1; j < m; j++) {
		// Pushes m rows into the newArray to create the columns
		newArray.push(row);
	  }
	  // Pushes the current row, which now has n zeroes in it, to the array
	  newArray.push(row);
	  return newArray;
  }

// Solution 2 

function zeroArray(m, n) {
	// Creates a 2-D array with m rows and n columns of zeroes
	let newArray = [];
	for (let i = 0; i < m; i++) {
	  // Adds the m-th row into newArray
	 let row = [];
	  for (let j = 0; j < n; j++) {
		// Pushes n zeroes into the current row to create the columns
		row.push(0);
	  }
	  // Pushes the current row, which now has n zeroes in it, to the array
	  newArray.push(row);
	}
	return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  
// Solution 2 > Solution 1