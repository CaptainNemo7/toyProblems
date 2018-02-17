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