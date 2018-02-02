// 4.1 find if there is a route between two nodes
const routeBetweenNodes = (a, b) => {
  if ( isEdgeOf(a, b) || isEdgeOf(b, a) ) {
    return true
  } 
  return false;
};

const isEdgeOf = (node, target) => {
  if ( node.value === target.value ) {
    return true;
  }
  
  for ( let i=0; i<node.edges.length; i++ ) {
    if ( node.edges[i].visited === false ) {
      node.edges[i].visited = true;
      if ( isEdgeOf(node.edges[i], target) ) return true;
    }
  }
  return false;
};

// 4.2 given an array of increasing integers, create a BST with minimal height;
// function Tree(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

const makeTree = arr => {
  
  const nextLevel = (start, end) => {
    if ( end < start ) {
      return null;
    }
    let mid = Math.floor((start + end)/2)
    let n = new Tree(arr[mid]);
    n.left = nextLevel(start, mid-1);
    n.right = nextLevel(mid+1, end);
    return n;
  }
  
  return nextLevel(0, arr.length-1);
 
}

// 4.3 turn tree into linked list: 
// function Tree(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// function List(val) {
//   this.val = val;
//   this.next = null;
// }

// List.prototype.add = function(node) {
//   this.next = new List(node);
// }

function treeToList(tree) {
  let lists = [];
  let dummy = new List(0);
  let result = dummy;
  addToList(lists, tree, 0);
  for (let i=0; i< lists.length; i++ ) {
    dummy.next = new List(lists[i])
    dummy = dummy.next;
  }
  return result.next;
}

function addToList(lists, node, depth) {
  if (node) {
 
    lists.push(node);
    addToList(lists, node.left, depth + 1);
    addToList(lists, node.right, depth + 1);
  }
}






