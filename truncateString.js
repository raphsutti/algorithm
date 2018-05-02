// Truncate str by max characters num
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num>3 ? num-3 : num) + '...';
  } 
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// // Truncate str by max characters num
// function truncateString(str, num) {
//   var strArray = str.split("");
//   // str length longer than num
//   if (strArray.length > num && num > 3) {
//     return strArray.splice(0,num-3).join("") + "...";
//   // num <=3
//   } else if (num <=3) {
//     return strArray.splice(0,num).join("") + "...";
//   } else {
//     return str;
//   }
// }

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
