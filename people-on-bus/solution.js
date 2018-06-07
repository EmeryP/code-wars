var number = function(busStops){
  let addToBus = 0;
  let subtractFromBus = 0;

  busStops.forEach(function(element){
    addToBus += element[0];
    subtractFromBus += element[1];
  });
  return addToBus - subtractFromBus;
};