function truthCheck(collection, pre) {
  // Is everyone being true?
  var result = [];
  // loop through every object
  for(var i=0; i<collection.length; i++) {
    // check property 'pre' to see if true
    if(!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");