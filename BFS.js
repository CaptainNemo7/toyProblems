const traverseBreadthFirst = (root, cb) => {
  let queue = [root];

  while ( queue.length > 0 ) {
    let node = queue.shift();
    cb(node.value);
    if ( node.left ) {
      queue.push(node.left)
    }
    if ( node.right ) {
      queue.push(node.right)
    }
  }
}