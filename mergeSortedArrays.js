// merge in O(n) time


const merge = (array1, array2) => {
  let result = [];
  
  let counter1 = 0;
  let counter2 = 0;
  
  while ( result.length <= (array1.length + array2.length) ) {

    if ( counter1 === array1.length ) {
      while(counter2 !== array2.length) {
        result.push(array2[counter2]);
        counter2++;
      }
      break;
    }
    
    if ( counter2 === array2.length ) {
      while(counter1 !== array1.length) {
        result.push(array1[counter1]);
        counter1++;
      }
      break;
    }
    
    if ( array1[counter1] > array2[counter2] ) {
      result.push(array2[counter2]);
      counter2++;
    } else {
      result.push(array1[counter1]);
      counter1++;
    }
    
  }

  return result;
}
