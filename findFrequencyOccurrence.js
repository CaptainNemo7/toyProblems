const searchRange = (nums, target) => {
  // init low and high positions
  let lowPosition = -1;
  let highPosition = -1;
  
  
  const searchPosition = (low, high) => {
    // return if out of bounds
    if ( low > high ) {
      return;
    }
    
    const mid = Math.floor((low + high) / 2);
    
    // once target is found, need to find start and end indexs
    // of target
    if ( nums[mid] === target ) {
      // check low position is higher than mid
      // if so, reassign low position to mid
      if ( lowPosition === -1 || lowPosition > mid ) {
        lowPosition = mid;
      }
      
      // check if high position is lower than mid
      // if so, reassign high position to mid
      if ( highPosition === -1 || highPosition < mid ) {
        highPosition = mid;
      }
      
      // search low position of one lower than mid
      searchPosition(low, mid-1);
      
      // search high position of one higher than mid
      searchPosition(mid+1, high);
    }
    // binary search for target
    if ( nums[mid] > target ) {
      searchPosition(low, mid-1);
    }
    
    if ( nums[mid] < target ) {
      searchPosition(mid+1, high);
    }
  }
  
  searchPosition(0, nums.length);
  // return the number of times the target occurs in array
  return highPosition - lowPosition + 1;
  
}