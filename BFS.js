//BFS for target

const findTargetBF = (root, target) => {
  let queue = [root];

  while ( queue.length > 0 ) {
    let node = queue.shift();

    if ( node.value === target ) {
      return node;
    }

    if ( node.left ) {
      queue.push(node.left);
    }

    if ( node.right ) {
      queue.push(node.right);
    }

  }

  return false;
}




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