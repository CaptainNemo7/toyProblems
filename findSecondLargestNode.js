const findLargest = rootNode => {
	var current = rootNode;
	while ( current ) {
		if ( !current.right ) {
			return current.value;
		}
		current = current.right;
	}
}
const findSecondLargest = rootNode => {
	if (!rootNode || (!rootNode.left && !rootNode.right)) {
		throw new Error('Tree must have at least 2 nodes');
	}
	let current = rootNode;
	while (current) {
		// case: current is largest and has a left subtree
		// 2nd largest is the largest in that subtree
		if (current.left && !current.right) {
			return findLargest(current.left);
		}
		// case: current is parent of largest, and
		// largest has no children, so
		// current is 2nd largest
		if (current.right && !current.right.left && !current.right.right) {
			return current.value;
		}
		current = current.right;
	}
}




// recrusive


const findLargest = rootNode => {
	if ( !rootNode ) {
		throw new Error('Tree must have at least 1 node');
	}
	if ( rootNode.right ) {
		return findLargest(rootNode.right);
	}
	return rootNode.value;
}

const findSecondLargest = rootNode => {
	if ( !rootNode || (!rootNode.left && !rootNode.right) ) {
		throw new Error('Tree must have at least 2 nodes');
	}
	// case: we're currently at largest, and
	// largest has a left subtree
	// 2nd largest is largest in said subtree
	if ( rootNode.left && !rootNode.right ) {
		return findLargest(rootNode.left);
	}
	// case: we're at parent of largest,
	// and largest has no left subtree
	// so 2nd largest must be current node
	if ( rootNode.right && !rootNode.right.left && !rootNode.right.right ) {
		return rootNode.value;
	}
	// otherwise: step right
	return findSecondLargest(rootNode.right);
}


