// swap numbers in place;
const swapNumbers = (a,b) => {
  console.log('a before: ' , a);
  console.log('b before: ' , b);
  if ( a > b ) {
    a = a - b;
    b = a + b;
    a = b - a;
  } else {
    b = b - a;
    a = b + a;
    b = a - b;
  }
  console.log('a after: ' , a);
  console.log('b after: ' , b);
  return [a, b];
}