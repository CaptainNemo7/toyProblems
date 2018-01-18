/*
Given a sorted array consisting of only integers where every element appears twice except for 
one element which appears once. Find the single element that appears once.

Constraints: 
	Time: O(n)
	Space: O(1)

Example: 
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
*/


const singleNonDuplicate = (nums) => {
	for ( let i=0; i<nums.length; i+=2 ) {
		if ( nums[i] !== nums[i+1] ) {
			return nums[i]
		}
	}
};

