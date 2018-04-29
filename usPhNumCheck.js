function telephoneCheck(str) {
  // Good luck!
  var regex = /^1?\s?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return regex.test(str)
  
  //   return str.match(/\d+-\d+-\d+/);
}

telephoneCheck("(6505552368)")