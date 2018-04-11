function checkExam(array1, array2) {

  let count = 0;

  for(let j = 0; j < array1.length; j++){

    if(array1[j] === array2[j]){
      count += 4;
    } else if(array1[j] !== array2[j] && array2[j] !== ''){
      count -= 1;
    } else if(array2[j] === ' '){
      count += 0;
    }
  }

  if(count < 0){
    return 0;
  } else{
    return count;
  }
}