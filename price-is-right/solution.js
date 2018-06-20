let numbers = [ 0, 9, -10, -3, 4, 6, 1, -8, -5 ];
let target = -11;

function priceIsRight(numbers, target) {
  const result = numbers.filter(number => number <= target)
  if(numbers == false){
    return undefined;
  }
  if(result[0] == null){
    return undefined;
  }
  if(result.includes(target)){
    return target;
  }
  if(target == 0 || target == 1){
    return undefined;
  }
  if(!result.includes(target)){
    return Math.max(...result)
  }
}

priceIsRight(numbers, target)