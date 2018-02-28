const insertionSort = array => {
	for ( let i=0; i<array.length; i++ ) {
		let temp = array[i];
		let k = i - 1;
		while ( k >= 0 && array[k] > temp ) {
			array[k+1] = array[k];
			k--;
		}
		array[k+1] = temp;
	}
	return array;
}




var mergeSort = function(array) {
  if ( array.length === 1 ) {
    return array;
  } else {
    let mid = Math.floor(array.length / 2);
    let max = array.slice(mid);
    let min = array.slice(0, mid);
    return merge(mergeSort(min), mergeSort(max));
  }
}

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while ( leftIndex < left.length && rightIndex < right.length ) {
    if ( left[leftIndex] < right[rightIndex] ) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}