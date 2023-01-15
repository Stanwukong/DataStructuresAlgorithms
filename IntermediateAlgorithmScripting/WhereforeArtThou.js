// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
function whatIsInAName(collection, source) {
  const sauceKeys = Object.keys(source);

  let ans = collection.filter(obj => sauceKeys
						.map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
						.reduce((a, b) => a && b))
return ans;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));