export function definePrime(num) {
  let isPrime, result;
  
  isPrime = true;
  if (num > 1 && num <=1000) {
    for(let i = 2; i < num; i++ ) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    result = isPrime ? `Number ${num} is prime number` : `Number ${num} is composite number`;
  } else if (num < 1 || num > 1000) {
    result = `Data is not valid`;
  }
  return result;
}