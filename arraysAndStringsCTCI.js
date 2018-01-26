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

// Constant Space
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
  // can check length too
	str1 = str1.toLowerCase().trim().split('').sort().join('');
	str2 = str2.toLowerCase().trim().split('').sort().join('');
	if ( str1 === str2 ) {
	  return true;
	}
	return false;
}