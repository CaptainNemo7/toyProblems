// side effects to this solution
  // last node can't be deleted 
const deleteNode = nodeToDelete => {
  
  if ( nodeToDelete.next ) {
    nodeToDelete.value = nodeToDelete.next.value;
    nodeToDelete.next = nodeToDelete.next.next;
  } else {
    throw new Error('Can\'t delete the last node with this method');
  }
  
}


// function LinkedListNode(value) {
//   this.value = value;
//   this.next = null;
// }