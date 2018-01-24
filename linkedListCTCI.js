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





