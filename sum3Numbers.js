const binarySearch = (array, target) => {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let mid = Math.floor((firstIndex+lastIndex)/2);

  while (array[mid] != target && firstIndex < lastIndex ) {
    if ( array[mid] > target ) {
      lastIndex = mid-1;
    }
    if ( array[mid] < target ) {
      firstIndex = mid+1;
    }

    mid = Math.floor((firstIndex + lastIndex)/2);
  }
  
  return ( array[mid] != target ) ? -1 : mid;
}

const find3some = (array, target) => {

  for ( let i=0; i<array.length; i++ ) {
    for ( let j= i+1; j<array.length; j++ ) {
      let pos1 = array[i];
      let pos2 = array[j];
      let dif = target - (pos1 + pos2);
      let ans = binarySearch(array, dif);
      if ( array[ans] === pos1 || array[ans] === pos2 ) {
        continue;
      }
      if ( ans >= 0 ) {
        return [pos1, pos2, array[ans]]
      }
    }
  }
  return 'no possible answers';
}