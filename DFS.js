const traverseDepthSearch = (root, cb) => {
	let stack = [root];
	while ( stack.length > 0 ) {
		let node = stack.pop();
		cb(node.value);
		if ( node.right ) {
			stack.push(node.right);
		} 
		if ( node.left ) {
			stack.push(node.left);
		}
	}
}

// W/ recursion
const traverseDepthSearch = (root, cb) => {
  cb(root.value);
  if ( root.left ) {
    traverseDepthSearch(root.left, cb);
  }
  if ( root.right ) {
    traverseDepthSearch(root.right, cb);
  }
}