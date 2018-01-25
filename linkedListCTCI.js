//2.1 Remove Dups
const removeDup = (node) => {
  let prev = node;
  let cur = node;
  let obj = {};
  while ( cur !== null ) {
    if ( obj[cur.val] ) {
      prev.next = cur.next
    } else {
      obj[cur.val] = 1;
      prev = cur
    }
    cur = cur.next;
  }
  return node;
};

// 2.2 return kth to last;
// two ways both O(n); iterate through and keep counter; iterate through again and stop kth out from end
const kthValue = (head, k) => {
	let counter = 0;
	let pointer = head;

	while ( pointer !== null ) {
	  counter++;
	  pointer = pointer.next;
	}
	
	let stop = counter - k;
	let result = head;

	while ( stop !== 0 ) {
	  result = result.next;
	  stop--;
	}
	
	return result;
}

// 2.3 Delete Middle Node not given head;
const deleteMidNode = node => {
	if ( node === null || node.next === null ) {
		return false;
	}

  node.val = node.next.val;
  node.next = node.next.next;
  return node;
}

// 2.4 Partition linkedlist around value
const partitionList = (head, partitionAround) => {
	let listVals = [];
	let resultList = head;
	let dummy = resultList;
	while ( head !== null ) {
	  listVals.push(head.val);
	  head = head.next;
	}
	
	listVals = listVals.sort((a, b) =>  a - b)
	for ( let i=0; i<listVals.length; i++ ) {
	  dummy.next = new List(listVals[i]);
	  dummy = dummy.next;
	}
	return resultList.next
}

// 2.5 Sum Lists
const sumList = (list1, list2) => {
  let holder1 = list1;
  let dummy1 = holder1;
  let list1Array = [];
  
  let holder2 = list2;
  let dummy2 = holder2;
  let list2Array = [];
  
  while ( dummy1 !== null ) {
    list1Array.push(dummy1.val);
    dummy1 = dummy1.next;
  }
  
  while ( dummy2 !== null ) {
    list2Array.push(dummy2.val);
    dummy2 = dummy2.next;
  }
  
  let resultArray = [];
  list1Array = parseInt(list1Array.reverse().join(''));
  list2Array = parseInt(list2Array.reverse().join(''));
  resultArray = (list1Array + list2Array);
  resultArray = resultArray.toString().split('').reverse();
  
  for ( let i=0; i<resultArray.length; i++ ) {
    holder1.val = parseInt(resultArray[i]);
    holder1 = holder1.next;
  }
  
  return list1
}

// 2.6 check if linked list is a Palindrome
const plaindromeChecker = list => {
	let str = '';
	
	while ( list !== null ) {
	  str += list.val;
	  list = list.next
	}
	
	let reverseString = str.split('').reverse().join('');

	
	if ( reverseString === str ) {
	  return true;
	}
	
	return false;
}


// 2.7 determine if two lists intersect and return the intersecting node if so
const intersect = (list1, list2) => {
  let dummy1 = list1;
  let dummy2 = list2;
  
  let listDifference = 0;
  let longerList = null;
  let shorterList = null;
  
  let list1Counter = 1;
  let list2Counter = 1;
  
  let list1Tail = null;
  let list2Tail = null;
  
	while ( list1 !== null && list2 !== null ) {
	  
	  list1 = list1.next;
	  if ( list1 !== null ) {
	    list1Counter++;
	  }
	  if ( list1.next === null ) {
	    list1Tail = list1;
	  }
	  
	  if ( list2.next === null ) {
	    list2Tail = list2;
	  }
	  list2 = list2.next;
	  if ( list2 !== null ) {
	    list2Counter++;
	  }
	  
	}
	
	if ( list1Counter > list2Counter ) {
	  listDifference = list1Counter - list2Counter;
	  longerList = dummy1;
	  shorterList = dummy2;
	} else {
	  listDifference = list2Counter - list1Counter;
	  longerList = dummy2;
	  shorterList = dummy1;
	}
	
	if ( list1Tail === list2Tail ) {
	  
	  for ( let i=0; i<listDifference; i++ ) {
	    longerList = longerList.next;
	  }
	  
	  while ( longerList !== null ) {
	    
	    if ( longerList === shorterList ) {
	      return longerList;
	    }
	    
	    longerList = longerList.next;
	    shorterList = shorterList.next;
	  }
	} else {
	  return false;
	}
}





