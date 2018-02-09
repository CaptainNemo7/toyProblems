// const Node = function(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// let nodeA = new Node('1');
// let nodeB = new Node('2');
// let nodeC = new Node('3');
// let nodeD = new Node('4');
// let nodeE = new Node('5');
// let nodeF = new Node('6');
// let nodeG = new Node('7');
// let nodeH = new Node('8');

// nodeA.left = nodeB;
// nodeA.right = nodeC;
// nodeC.left = nodeD;
// nodeC.right = nodeF;
// nodeD.right = nodeE;
// nodeF.left = nodeG;
// nodeF.right = nodeH;

// const printNode = function(node) {
//   console.log(node.value * 2);
// }
// traverseDepthFirst(nodeA, printNode);

const traverseDepthFirst = function(root, callback) {
  let stack = [root];
  
  while ( stack.length > 0 ) {
    let node = stack.pop();
    callback(node);
    
    if ( node.right ) {
      stack.push(node.right);
    }
    
    if ( node.left ) {
      stack.push(node.left);
    }
  }
};


// W/ recursion
const traverseDepthFirst = function(node, callback) {
  callback(node);
  
  if ( node.left ) {
    traverseDepthFirst(node.left, callback);
  }
  
  if ( node.right ) {
    traverseDepthFirst(node.right, callback)
  }
};



const searchDepthFirst = function(root, targetValue) {
  let stack = [root];
  
  while ( stack.length > 0 ) {
    let node = stack.pop();
    
    if ( node.value === targetValue ) {
      return node;
    }
    
    if ( node.right ) {
      stack.push(node.right);
    }
    
    if ( node.left ) {
      stack.push(node.left);
    }
  }
}

// w/ recursion
const searchDepthFirst = function(node, targetValue) {
  let left = null;
  let right = null;
  
  if ( node.value === targetValue ) {
    return node;
  }
  
  if ( node.left ) {
    left = searchDepthFirst(node.left, targetValue);
  }
  
  if ( node.right ) {
    right = searchDepthFirst(node.right, targetValue);
  }
  
  return left || right;
};

