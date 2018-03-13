
const reversedList = linkedListNode => {
	let node = linkedListNode;
	let previous = null;

	while ( node ) {
		// save path to next node;
		let next = node.next;
		// set node.next to previous node
		node.next = previous;
		// previous now equals current node
		previous = node;
		// continue to next node;
		node = next;
	}
	
	// return the new beginning node of the list;
	return previous;
}