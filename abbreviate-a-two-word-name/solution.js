function abbrevName(name){

  var full = name.split(/[ _]+/);
  var first = full[0][0];
  var last = full[1][0];
  return(first.toUpperCase() + '.' + last.toUpperCase());
}