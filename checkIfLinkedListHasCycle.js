const checkForCycle = head => {
  let fast = head.next;
  let slow = head;
  
  while ( fast && slow ) {
    fast = fast.next.next;
    slow = slow.next;
    
    if ( fast === slow ) {
      return true;
    }
  }
  
  return false;
}


// function LinkedList(value) {
//   this.value = value;
//   this.next = null;
// }

// let a = new LinkedList(1);
// let b = new LinkedList(2);
// let c = new LinkedList(3);
// let d = new LinkedList(4);
// let e = new LinkedList(5);


// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = c;