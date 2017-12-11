function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var i = 0; i<arr.length; i++) {
    var a = arr[i]['avgAlt'];
    var result = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + a,3) / GM);
    arr[i]['orbitalPeriod'] = Math.round(result);
    delete arr[i]['avgAlt'];
  }
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);