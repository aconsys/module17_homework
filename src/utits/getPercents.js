export function getPercents(percent, num) {
  let result;
  
  if (percent && num) {
    result = num * percent / 100;
  } else {
    result = 'Percent and/or number are not set!'
  }
  
  return result;
}