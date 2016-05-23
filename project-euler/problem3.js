var number = 13195;
var largestPrimeFactor = 2;

var isPrime = function(factor) {
  for (var i=2; i<factor; i++) {
    if (factor%i === 0) {
      return false;
    }
  }
  return true;
}

for (var i=2; i<number; i++) {
  if (number%i === 0 && isPrime(i)) {
    largestPrimeFactor = i;
  }
}

console.log(largestPrimeFactor);
