function addTogether() {
// Create function to check if the element is a number
  var checkNum = function(num) {
    if(typeof(num) !=='number') {
      return undefined
    } else {
      return num;
    }
  }
  
  // if there are more than 1 arguments
  if(arguments.length > 1) {
    // perform check num on both arguments
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    // return undefined if either is undefined
    if(a === undefined || b === undefined) {
      return undefined;
    } else {
       return a+b;
    }
  
  // if only one argument
  } else {
    // assign value of first argument
    var c = arguments[0]
    // check num of first argument
    if (checkNum(c)) {
      return function(arg2) {
        if (c=== undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      }
    }
  }
}

addTogether(2)([3])