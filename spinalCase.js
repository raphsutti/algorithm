function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(" ").join("-");
}

spinalCase('This Is Spinal Tap');
