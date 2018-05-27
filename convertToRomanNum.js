function convertToRoman(num) { 
  var rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 
  var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 

  var result = ""; 
  for (var i=0; i<dec.length; i++) { 
    while (dec[i] <= num) { 
      result += rom[i]; 
      num -= dec[i]; 
    } 
  } 

  return result;
} 

convertToRoman(506); 
