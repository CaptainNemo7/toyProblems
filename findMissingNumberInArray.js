const findMissing = list => {
  let sumOfPresentNumbers = 0;
  let sumOfAllNumbers =0;
  
  for ( let i=0; i<list.length; i++ ) {
    sumOfPresentNumbers += list[i];
  }
  
  for ( let i=list[0]; i<=list[list.length-1]; i++ ) {
    sumOfAllNumbers += i;
  }
  
  // return comparison for missing Number 
  return sumOfAllNumbers - sumOfPresentNumbers;
  
}