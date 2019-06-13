// 1.1 Determine if a string has all unique characters
const allUnique = str => {
  let holder = {};
  str = str.split(' ').join('')

  for ( let i=0; i<str.length; i++ ) {
    if ( holder[str[i]] ) {
      holder[str[i]]++;
    } else {
      holder[str[i]] = 1;
    }
  }
  
  let keys = Object.keys(holder);
  for ( let i=0; i<keys.length; i++ ) {
    if ( holder[keys[i]] !== 1 ) {
      return false;
    }
  }
  return true;
}


const allUnique = str => { 
  str = str.split('').sort().join('')
  for ( let i=1; i<str.length; i++ ) {
    if ( str[i-1] === str[i] ) {
      return false;
    }
  }
  return true;
}

// 1.2 Given two strings, check if one is a permutation of the other
const permutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  // can check length too
	// str1 = str1.toLowerCase().trim().split('').sort().join('');
	// str2 = str2.toLowerCase().trim().split('').sort().join('');
	// if ( str1 === str2 ) {
	//   return true;
	// }
  // return false;
  
  let currentCount = 0;
  for (let i=0; i<str1.length; i++) {
    currentCount += str1[i].charCodeAt();
  }

  for (let i=0; i<str2.length; i++) {
    currentCount -= str2[i].charCodeAt();
  }

  if (currentCount === 0) {
    return true;
  }

  return false;
}

// 1.3 given a string, turn all spaces in string into '%20'
const spaceHunter = str => {
  // str = str.trim();
  // var regex = /\b \b/gi;
  // return str.replace(regex, '%20')

  // str = str.trim();
  // return encodeURI(str)

	str = str.trim().split(' ')
	let result = ''
	for ( let i=0; i<str.length; i++ ) {
    if ( i+1 === str.length ) {
      result += str[i];
      break;
    }
	  result = result + str[i] + '%20'
	}
  return result;
}

// 1.4 check for palindrome of input string
const isPalindromePermutation = word => {

  let oddChecker = new Set();
  
  for ( let i=0; i<word.length; i++ ) {

    if ( oddChecker.has(word[i]) ) {
      oddChecker.delete(word[i]);
    } else {
      oddChecker.add(word[i]);
    }

  }

  if ( oddChecker.size < 2 ) {
    return true;
  } else {
    return false;
  }

}

// 1.5 compress given string by putting counter of letters after letter
const compress = str => {
  str = str.toLowerCase()
  
	let counter = 1;
	let newStr = str.slice(0,1);
	
	for ( let i=1; i<str.length; i++ ) {
	  console.log(str[i])
	  if ( str[i] === str[i-1] ) {
	    counter++;
	  } else {
	    newStr += counter;
	    newStr += str[i];
	    counter = 1;
	  }
	}
	newStr += counter;
	
	if ( newStr.length >= str.length ) {
	  return str;
	}
	
	return newStr;
}







