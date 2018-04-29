function confirmEnding(str, target) {
  // use substr to return last letters length based on 'target'
  return str.substr(target.length*-1) === target;
}

confirmEnding("He has to give me a new name", "name")
