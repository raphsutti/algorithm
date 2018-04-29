
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length < 3 || num <3) {
    var slice = str.slice(str,num);
    return slice += "...";
  } else if (str.length>num) {
    var slice = str.slice(str, num-3);
    return slice += "...";
  }
  return str;
}

truncateString("Absolutely Longer", 2);