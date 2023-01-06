// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
function mutation(arr) {
	const test = arr[1].toLowerCase();
	const target = arr[0].toLowerCase(); 
	for (let i = 0; i < test.length; i++) {
	  if (target.indexOf(test[i]) < 0) {
		return false;
	  }
	}
	return true;
  }
  
  console.log(mutation(["hello", "hey"]));