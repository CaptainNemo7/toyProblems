const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion'
};


const threeDigitConverter = (dig, num) => {

  let result = '';
  let hundred = Math.floor(dig / 100);
  let ten;
  let one;
  dig %= 100;
  
  if ( hundred ) {
    result += numbersToWords[hundred] + ' hundred';
  }

  if ( Math.floor(dig / 10) === 1 ) {
    
    ten = dig;
    
    if ( hundred && ten ) {
      result += ' ';
    }
    
    if ( ten ) {
      result += numbersToWords[ten];
    }
    
  } else {
    ten = Math.floor(dig / 10) * 10;
    one = dig % 10;
    if ( hundred && (ten || one) ) {
      result += ' ';
    }
    
    if ( ten ) {
      result += numbersToWords[ten];
    }
    
    if ( ten && one ) {
      result += '-'
    }
    
    if ( one ) {
      result += numbersToWords[one];
    }
  }
  return result;
};

const numberToEnglish = number => {
  // make sure input is a number and not a string;
  if ( typeof number === 'string' ) {
    number = number.replace(/,/g, '');
  }
  
  // return my value as english words
  // check if number is 0;
  if ( number === 0 ) {
    return 'zero';
  }
  // check for negative number
  let negative = false;
  if ( number < 0 ) {
    negative = true;
    number = number * -1;
  }
  
  let result = '';
  let divisor = 1000000000;
  // check if number is 1000 or greater;
  while ( divisor >= 1000 ) {
    const place = numbersToPlace[divisor];
    let digit = Math.floor(number / divisor);
    
    if ( digit ) {
     
      if ( result ) {
        result += ' ';
      }
      

      result += threeDigitConverter(digit, number);
      
      result += ' ' + place;
      number = number % divisor;
    }

    divisor /= 1000;
  }
  // find the last 3 digists of the number
  let digit = number;
  const hundredsDigits = threeDigitConverter(digit, number);
  
  if ( result && hundredsDigits ) {
    result += ' ';
  }
  result += hundredsDigits;
 
  if ( negative ) {
    return 'negative ' + result;
  } else {
    return result;
  }
  
};










