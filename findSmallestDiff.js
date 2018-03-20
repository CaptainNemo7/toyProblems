const findSmallestDifference = (arr1, arr2) => {
  arr1.sort((a,b) => a-b)
  arr2.sort((a,b) => a-b);
  let minDiff = Number.MAX_VALUE;
  let pointer1 = 0;
  let pointer2 = 0;
  
  while ( pointer1 < arr1.length && pointer2 < arr2.length ) {
    if ( Math.abs(arr1[pointer1] - arr2[pointer2]) < minDiff ) {
      minDiff = Math.abs(arr1[pointer1] - arr2[pointer2]);
    }
    
    // move smaller value 
    if ( arr1[pointer1] < arr2[pointer2] ) {
      pointer1++;
    } else {
      pointer2++
    }
  }
  return minDiff;
}