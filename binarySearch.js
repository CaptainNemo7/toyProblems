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

function binarySearch(target, nums) {
    // see if target appears in nums
    // we think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target, so by ‐1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we *don't* mean "the last index")
    var floorIndex = ‐1;
    var ceilingIndex = nums.length;
    // if there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {
        // find the index ~halfway between the floor and ceiling
        // we have to round down, to avoid getting a "half index"
        var distance = ceilingIndex ‐ floorIndex;
        var halfDistance = Math.floor(distance / 2);
        var guessIndex = floorIndex + halfDistance;
        var guessValue = nums[guessIndex];
        if (guessValue === target) {
            return true;
        }
        if (guessValue > target) {
            // target is to the left, so move ceiling to the left
            ceilingIndex = guessIndex;
        } else {
          // target is to the right, so move floor to the right
               floorIndex = guessIndex;
           }
       return false;
   }
}


// merge sort

function mergeSort(arrayToSort) {
JavaScript
// BASE CASE: arrays with fewer than 2 elements are sorted
if (arrayToSort.length < 2) {
    return arrayToSort;
}
// STEP 1: divide the array in half
// we need to round down to avoid getting a "half index"
var midIndex = Math.floor(arrayToSort.length / 2);
var left  = arrayToSort.slice(0, midIndex);
var right = arrayToSort.slice(midIndex);
// STEP 2: sort each half
var sortedLeft  = mergeSort(left);
var sortedRight = mergeSort(right);
// STEP 3: merge the sorted halves
var sortedArray = [];
while (sortedLeft.length || sortedRight.length) {
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is empty
    if (sortedLeft.length && (!sortedRight.length
            || sortedLeft[0] < sortedRight[0])) {
        sortedArray.push(sortedLeft.shift());
} else {
               sortedArray.push(sortedRight.shift());
} }
       return sortedArray;
}

