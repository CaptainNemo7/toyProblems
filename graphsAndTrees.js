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