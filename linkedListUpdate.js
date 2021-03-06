// Given a linked List, traverse and update based off of callback function;

// Create new LinkedList and return
const updateList = (node, cb) => {
	let newList = node;
	let dummy = newList;
	let list = node;
	while ( list !== null ) {
		dummy.val = cb(dummy.val);
		dummy = dummy.next;
		list = list.next;
	}
	return newList;
}

// Update given LinkedList
const updateList = (node, cb) => {
	let dummy = node;
	let list = node;
	while ( list !== null ) {
		dummy.val = cb(dummy.val);
		dummy = dummy.next;
		list = list.next;
	}
	return node;
}

// reverse 
const reverseLinekdList = head => {
 let current = head;
 let previous = null;
 let nextNode = null;
 
 while ( current ) {
   nextNode = current.next;
   current.next = previous;
   
   previous = current;
   current = nextNode;
 }
 
 return previous
}