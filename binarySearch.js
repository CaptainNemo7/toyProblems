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