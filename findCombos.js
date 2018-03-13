// Given an array of unsorted integers, where all values are > 0, write code to produce the number of sets that satisfy the following:
// a + b > c
// a + c > b
// b + c > a
// There are no duplicates in the array. You may apply a sort function to the array if you want.

// Ex for input of an array [2,5,4,3] your code should return the integer 3 because there are 3 combinations that satisfy the three conditions above
// [2,3,4], [2,4,5], [3,4,5]
// Note that we don’t count different orderings of the same numbers more than once.

const checkTriplets = array => {
  let a = array[0];
  let b = array[1];
  let c = array[2];
  
  if ( c === undefined ) {
    return false;
  }
  // check test cases to see if valid array
  if ( a + b <= c ) {
    return false;
  }
  
  if ( a + c <= b ) {
    return false;
  }
  
  if ( b + c <= a ) {
    return false;
  }
  
  return array;
}

const findCombos = array => {
  let allResults = [];
  let resultsCounter = 0;
  let current = [];
  // set variables for array indices 
  let a = 0;
  let b = 1;
  let c = 1;
  
  //check all combos and increment counter 
  while ( a + 1 !== array.length ) {
    // check if c and b are valid, if not incrememt/reset
    if ( c > array.length ) {
      // if b is one off from the length, need to reset all trackers
      if (b + 1 === array.length ) {
        a = a + 1; 
        b = a + 1; 
        c = a + 2;
        current = [array[a], array[b], array[c]];
      // otherwise if b is not one off from the length, increment b and c by one.  
      } else {
        b = b + 1;
        c = b + 1;
        current = [array[a], array[b], array[c]];
      }
    } else {
      // if c is still valid, increment by 1;
      c = c + 1;
      current = [array[a], array[b], array[c]];
    }
    // if checkTriplets is true, add to results and increment counter
   
    if ( checkTriplets(current) ) {
      allResults.push(current);
      resultsCounter++;
    }
  }
  console.log(allResults)
  return resultsCounter;
}

findCombos([11, 2, 3, 5, 8])

//  [2,5,4,3]
//  [11, 8, 5, 3, 2]
//  [9,7, 6, 4, 2]




