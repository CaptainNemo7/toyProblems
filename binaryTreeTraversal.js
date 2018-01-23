var binaryTreePaths = function(root) {
	let result = [];

	const treeCrawler = (node, currentPath) => {
		if ( !node ) {
			return;
		} else {
			currentPath += node.val;
		}

		if ( !node.left && !node.right ) {
			return result.push(currentPath);
		} else {
			currentPath += '->';
		}

		if ( node.left ) {
			treeCrawler(node.left, currentPath)
		}

		if ( node.right ) {
			treeCrawler(node.right, currentPath)
		}
	}
	treeCrawler(root, '')
	return result;
};
