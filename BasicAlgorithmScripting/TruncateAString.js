// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
function truncateString(str, num) {
	let truncated = "";
	if (str.length > num) {
	  truncated = str.slice(0, num) + "...";
	  return truncated;
	} else {
	  return str;
	}  
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));