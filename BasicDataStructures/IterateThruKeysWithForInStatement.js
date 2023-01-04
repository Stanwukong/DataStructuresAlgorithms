// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement
/**
 * We've defined a function countOnline which
 * accepts one argument (a users object). Use a
 * for...in statement within this function to loop
 * through the users object passed into the
 * function and return the number of users whose
 * online property is set to true. An example
 * of a users object which could be passed to
 * countOnline is shown below. Each user will
 * have an online property with either a true
 * or false value.
*/
const users = {
	Alan: {
	  online: false
	},
	Jeff: {
	  online: true
	},
	Sarah: {
	  online: false
	}
  }
  
  function countOnline(usersObj) {
	// Only change code below this line
	let answer = 0;
  for (let user in usersObj) {
	if (usersObj[user].online === true) {
	  answer++;
	}
  }
  return answer;
  
	// Only change code above this line
  }
  
  
  console.log(countOnline(users));