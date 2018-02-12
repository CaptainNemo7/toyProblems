// O(n) time and O(1) space

const getRandomIndex = (floor, ceiling) => {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const swap = (arr, item1, item2) => {
  let holder = arr[item1];
  arr[item1] = arr[item2];
  arr[item2] = holder;
}

const shuffle = list => {
  for ( let i=0; i<list.length-1; i++ ) {
    let random = getRandomIndex(i+1, list.length-1);
    swap(list, i, random)
    
  }
  return list;
}