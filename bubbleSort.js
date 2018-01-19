const swap = (num1, num2, array) => {
	let holder = array[num1];
	array[num1] = array[num2];
	array[num2] = holder;
	return array;
}


const bubbleSort = (array) => {
	for ( let i=0; i<array.length; i++ ) {
		let swapCount = 0;
		for ( let k=0; k<array.length-1-i; k++ ) {
			if ( array[k] > array[k+1] ) {
				swapCount++;
				swap(k, k+1, array)
			}
		}
		if ( swapCount === 0 ) {
			break;
		}
	}
	return array;
}