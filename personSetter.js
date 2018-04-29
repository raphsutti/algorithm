
var Person = function(firstAndLast) {
  // split first and last name into array
  var array = firstAndLast.split(" ");
  
  // getter functions
  this.getFirstName = function() {
    return array[0];
  };
  this.getLastName = function() {
    return array[1];
  };
  this.getFullName = function() {
    return array[0] + " " + array[1];
  };
  
  // setter functions
  this.setFirstName = function(first) {
    array[0] = first;
  };
  
  this.setLastName = function(last) {
    array[1] = last;
  };
  
  this.setFullName = function(firstAndLast) {
    var split = firstAndLast.split(" ");
    this.setFirstName(split[0]);
    this.setLastName(split[1]);
  }
};

var bob = new Person('Bob Ross');
// bob.getFullName();
// bob.setFirstName('Dylan')
// bob.getFirstName();
// bob.setFullName('Dude Man')
// bob.getFullName();