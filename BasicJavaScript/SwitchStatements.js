/**
 * Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/
function caseInSwitch(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
	  case 1:
	  answer = "alpha";
	  break;
	  case 2:
	  answer = "beta";
	  break;
	  case 3:
	  answer = "gamma";
	  break;
	  case 4:
	  answer = "delta"
	  break;
	}
  
  
  
	// Only change code above this line
	return answer;
  }
  
  caseInSwitch(1);