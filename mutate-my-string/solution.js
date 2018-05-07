function mutateMyStrings (s1, s2) {

  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let returnString = (s1 + '\n');

  for (var i in arr1) {
    if (arr1[i] !== arr2[i]){
      arr1[i] = arr2[i];
      returnString = returnString.concat(arr1.join('') + '\n');
    }
  }
  return returnString;
}