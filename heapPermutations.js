function permAlone(str) {
  var perm = [];
  // make an array out of str
  var arr = str.split('');
  // counter for non repeating permutation
  var result = 0;
  // swap two elements
  function swap(a,b) {
    // temp variable
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  
  function generate(n) {
    // regex to find repeating values
    var regex = /([a-z])\1+/;
    // if base case at 1 and no repeating values
    if (n === 1 && !regex.test(arr.join(''))) {
      result ++;
      perm.push(arr.join(''));
    } else {
      for (var i=0; i !== n; i++) {
        generate(n-1);
        // if n is even number, return 0, else return i
        swap(n%2 ? 0 : i, n-1)
      }
    }
  }
  generate(arr.length);
//   return perm;
  return result;
}

permAlone('aab');