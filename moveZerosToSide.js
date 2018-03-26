// brute force

const zerosToRight = arr => {
  let result = [];
  let zeroCoutner = 0;
  
  for ( let i=0; i<arr.length; i++ ) {
    if ( arr[i] === 0 ) {
      zeroCoutner++;
    } else {
      result.push(arr[i])
    }
  }
  
  for ( let i=0; i<zeroCoutner; i++ ) {
    result.push(0);
  }
  return result;
}

// more space efficent over brute force
const zerosToRight = arr => {
  let lastNumber = 0; 

  for ( let i=0; i<arr.length; i++ ) {
    if ( arr[i] !== 0 ) {
      arr[lastNumber] = arr[i];
      lastNumber++;
    }
  }
  
  for ( let i=lastNumber; i<arr.length; i++ ) {
    arr[i] = 0;
  }

  return arr;
}


// with a swap function and two pointers
const swap = (num1, num2, array) => {
	let holder = array[num1];
	array[num1] = array[num2];
	array[num2] = holder;
	return array;
}


const zerosToRight = arr => {
  let lastNonZero = 0;
  
  for ( let current=0; current<arr.length; current++ ) {
    if ( arr[current] !== 0 ) {
      swap(lastNonZero, current, arr);
      lastNonZero++;
    }
  }

  return arr;
}
