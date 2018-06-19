function rowWeights(array){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let teamOne = [];
  let teamTwo = [];
  let totalRowWeight = [];

  if(array.length <= 1){
    array.push(0);
    return array;
  }
  for(let i = 0; i < array.length; i++){

    if(([i] % 2) === 0){
      teamOne.push(array[i]);
    }else{
      teamTwo.push(array[i]);
    }
  }

  let rowOneWeight = teamOne.reduce(reducer);
  let rowTwoWeight = teamTwo.reduce(reducer);
  totalRowWeight.push(rowOneWeight, rowTwoWeight);
  return totalRowWeight;
}