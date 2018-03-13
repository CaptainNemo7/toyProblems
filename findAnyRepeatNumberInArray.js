
// O(n) time and space
const findRepeatNumber = arrayOfNumbers => {
  let holder = new Set();
  for ( let i=0; i<arrayOfNumbers.length; i++ ) {
    console.log(holder)
    if ( holder.has(arrayOfNumbers[i]) ) {
      return arrayOfNumbers[i];
    } else {
      holder.add(arrayOfNumbers[i])
    }
  }
  return 'no duplicates'
}