//2.1 Remove Dups
const removeDup = (node) => {
  let prev = node;
  let cur = node;
  let obj = {};
  while ( cur !== null ) {
    if ( obj[cur.val] ) {
      prev.next = cur.next
    } else {
      obj[cur.val] = 1;
      prev = cur
    }
    cur = cur.next;
  }
  return node;
};

// 2.2 return kth to last;
// two ways both O(n); iterate through and keep counter; iterate through again and stop kth out from end
const kthValue = (head, k) => {
	let counter = 0;
	let pointer = head;

	while ( pointer !== null ) {
	  counter++;
	  pointer = pointer.next;
	}
	
	let stop = counter - k;
	let result = head;

	while ( stop !== 0 ) {
	  result = result.next;
	  stop--;
	}
	
	return result;
}