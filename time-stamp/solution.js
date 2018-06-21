var value = 52874;

let testString = '1 month 1 week 1 day 17 hours 14 minutes';

function displayValue(value) {
  let results = [];
  let units = {
    'month': 24*60*28,
    'week': 24*60*7,
    'day': 24*60,
    'hour': 60,
    'minute': 1
  };
  for(var i in units){
    let p = Math.floor(value/units[i]);
    if(p == 1){results.push(p + ' ' + [i]);}
    if(p >= 2){results.push(p + ' ' + [i] + 's');}
    value %= units[i];
  }
  return results.join(' ');
}
displayValue(value);
