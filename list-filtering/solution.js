function filter_list(l) {
let newArray = l.filter((val) => {
  return typeof(val) === 'number';
  });
  return newArray;
}