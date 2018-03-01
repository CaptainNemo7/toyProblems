let arr = [ 6, 7, 1, 2, 3, 4, 5];
// let arr = [1, 2, 3,4, 5, 6, 7]

const findShift = list => {
  const firstDigit = list[0];
  
  let floor = 0;
  let ceiling = list.length-1;
  
  if ( list[floor] < list[ceiling] ) {
    return 'no rotation'
  }
  
  while ( floor < ceiling ) {
    let mid = Math.floor(floor + ((ceiling - floor) /2))
    
    if ( list[mid] >= firstDigit ) {
      floor = mid;
    } else {
      ceiling = mid;
    }
    
    if ( floor + 1 === ceiling ) {
      break;
    }
  }
  return ceiling;
}