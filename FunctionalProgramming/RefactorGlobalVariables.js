// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let list = [...arr]

  list.push(bookName);
  return list;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let list = [...arr];
  if (arr.indexOf(bookName) >= 0)
  {

    list.splice(list.indexOf(bookName), 1);
    return list;

    // Change code above this line
    }
}