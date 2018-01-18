/*
Given an unsorted array, find and return all elements that appear more than once
*/
var findDuplicates = function(nums) {
	let holder = {};
	let result = [];
	for ( let i=0; i<nums.length; i++ ) {
		if ( !holder[nums[i]] ) {
			holder[nums[i]] = 1;
		} else {
			holder[nums[i]] += 1;
		}
	}
	let keys = Object.keys(holder)
	for ( let i=0; i<keys.length; i++ ) {
		if ( holder[keys[i]] > 1 ) {
			result.push(parseInt(keys[i]))
		}
	}
	return result
};