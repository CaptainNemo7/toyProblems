// find the kth to last node in a linked list

   
const kthToLastNode = (nodeToFind, head) => {
 
 let pointer1 = head;
 let pointer2 = head;
 let counter = 0;
 
 while ( pointer1 !== null ) {
   
   if ( pointer1.next === null ) {
     return pointer2.value;
   }
   
   if ( counter >= (nodeToFind-1) ) {
     pointer2 = pointer2.next;
   }
   
   counter++;
   pointer1 = pointer1.next;
   
 }
 
}
   
