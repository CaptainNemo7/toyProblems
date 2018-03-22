const findBigDiff = arr => {
  let min = arr[0];
  let diff = 0;
  
  for ( let i=1; i<arr.length; i++ ) {
    if (arr[i] < min ) {
      min = arr[i];
      continue;
    }
    
    if (  (arr[i]-min) > diff ) {
      diff = (arr[i]-min);
    }
  }
  
  if ( diff === 0 ) {
    return -1;
  } 
  
  return diff;
}