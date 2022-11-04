import { definePrime } from'../../utits/definePrime.js';

xdescribe('Testing definePrime function', () => {
  const primeNum = 7;
  const compositeNum = 8;

  it('Should operate correctly with prime number, composite number and valid data', () => {
    expect(definePrime(primeNum)).toBe(`Number ${primeNum} is prime number`);
    expect(definePrime(compositeNum)).toBe(`Number ${compositeNum} is composite number`);
    expect(definePrime(1001)).toBe(`Data is not valid`);
  });
})