const countSort = (unsortedArray, highestNumberInArray) => {
	// Use indexes as #'x from unsorted array
	// create array full of 0s 
	let counts = [];
	for ( let i=0; i<highestNumberInArray + 1; i++ ) {
		counts.push(0);
	}

	// update counts to contain digits for indexes - increment count to find dups;
	unsortedArray.forEach(number => {
		counts[number]++;
	})

	// create final array to hold sorted numbers;
	let sorted = [];
	counts.forEach((countOfDups, number) => {
		for ( let dups=0; dups<countOfDups; dups++ ) {
			sorted.push(number)
		}
	})

	return sorted;
}