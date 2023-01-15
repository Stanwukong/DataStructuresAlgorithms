// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
function sumPrimes(num) {
	// Helper function to check primality
	function isPrime(num) {
	  const sqrt = Math.sqrt(num);
	  for (let i = 2; i <= sqrt; i++) {
		if (num % i === 0)
		  return false;
	  }
	  return true;
	}
  
	// Check all numbers for primality
	let sum = 0;
	for (let i = 2; i <= num; i++) {
	  if (isPrime(i))
		sum += i;
	}
	return sum;
  }