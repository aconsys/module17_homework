export function reverseStr(string) {
  let arr = string.split('');
  let reversedStr = arr.reverse().join('');

  return reversedStr;
}