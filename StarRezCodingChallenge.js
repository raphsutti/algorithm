var MainClass = function() {

  // ** Question 1 **
  //  Update this function to take a Camel Case string and output the result as a lowercase string with dashes 
  //  between each word.
  //
  //  Example 1:
  //  - input: CamelCaseVariable
  //  - output: camel-case-variable
  //  Example 2:
  //  - input: anotherVariableName2 
  //  - output: another-variable-name2
  //
  this.ConvertString = function(input)
    { 
        var convertedString = "";
        
        // blank string case
        if (input==="") {
          return convertedString;
        }
        
        // remove non alphanumeric characters
        filteredInput = input.replace(/[\W_]+/g,"");
        
        // convert first letter to capital letter for search
        capitalisedInput = filteredInput.charAt(0).toUpperCase() + filteredInput.slice(1);
        
        // return array of words split by capital letters eg. ["Camel", "Case", "Variable"]
        var splitWords = capitalisedInput.match(/[A-Z][a-z]+/g);
       
        // join words with hyphen eg. Camel-Case-Variable
        var hyphenWord = splitWords.join('-');
      
        // turn into lowercase eg. camel-case-variable
        convertedString += hyphenWord.toLowerCase();
        
        return convertedString;
    }
  
  
  // ** Question 2 **
  //  Update this function to accept a card scheme (Visa, MasterCard, Amex, etc) and an amount as input and 
  //  then calculate the surcharge (charge for processing the transaction).
  //  Surcharge Rates:
  //      - MasterCard = 1.2% for amounts up to and including 100, 1.0% for amounts over than 100
  //      - Visa = 1.0%
  //      - Amex = 3.1%
  //      - All others = 40 cent flat fee
  //
  //  For example:
  //      - input: "Visa", 10.00
  //      - output: 0.10  
  this.GetSurcharge = function (cardScheme, amount) {
    var surcharge = 0;
    // variables for rates for easy change if required
    var masterCardRateBelow100 = 0.012;
    var masterCardRateOver100 = 0.01;
    var visaRate = 0.01;
    var amexRate = 0.031;
    var otherRate = 0.4;
    
    // Test for $0 amount
    if (amount === 0) {
      surcharge = 0;
    
    } else if (cardScheme === "MasterCard") {
      // MasterCard case
      if (amount <= 100) {
        // for values <= 100
        surcharge = amount * masterCardRateBelow100;
      } else {
        // for values over $100
        surcharge = (100 * masterCardRateBelow100) + ((amount-100) * masterCardRateOver100);
      }
      
    } else if (cardScheme === "Visa"){
      // Visa case rate
      surcharge = amount * visaRate;
      
    } else if (cardScheme === "Amex"){
      // Amex case rate
      surcharge = amount * amexRate;
      
    } else {
      // All others case flat fee
      surcharge = otherRate;
    }

    return surcharge;
  }
}

module.exports = MainClass;
