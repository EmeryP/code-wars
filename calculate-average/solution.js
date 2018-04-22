function find_average(array) {
  let add = 0;
  for(let i = 0; i < array.length; i++){
    add = array[i] + add;
  }
  add = add / array.length;
  return add;
}