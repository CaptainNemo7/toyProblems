const findStartPointRow = (board) => {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    let median;
    let numsLen = board.length;
    
    // if even
    if (  numsLen % 2 === 0 ) {
        median = Math.floor((numsLen / 2 - 1 + numsLen / 2) / 2);
    } else { 
        // is odd
        median = Math.floor(numsLen/ 2);
    }
    return median;
}

const rabbitCarrots = (board) => {
  // carrots counter
  let carrotsEaten = 0;
  // recurse function
  const moves = (i,j) => {
    // increment carrots
    carrotsEaten += board[i][j];
    console.log(carrotsEaten)
    // make current spot 0
    board[i][j] = 0;
    // find next move 
    let nextMove = {'i': i, 'j': j};
    let nextMoveCounter = 0;
    
    let up = 0;
    if ( i-1 >= 0 ) {
      up = board[i-1][j];
    }
    
    let right;
    if ( j+1 < row.length) {
      right = board[i][j+1];
    }
    
    let down;
    if ( i < board.length ) {
      down = board[i+1][j];
    }
    
    let left;
    if ( j >= 0 ) {
      left = board[i][j-1];
    }
    
    // compare moves to all possibilities and choose greatest carrot
    // spot
    if ( nextMoveCounter < up ) {
      nextMoveCounter = up;
      nextMove.i = i-1;
      nextMove.j = j;
    }
    
    if ( nextMoveCounter < right ) {
      nextMoveCounter = right;
      nextMove.i = i;
      nextMove.j = j+1;
    }
    
    if ( nextMoveCounter < down ) {
      nextMoveCounter = down;
      nextMove.i = i+1;
      nextMove.j = j;
    }
    
    if ( nextMoveCounter < left ) {
      nextMoveCounter = left;
      nextMove.i = i;
      nextMove.j = j - 1;
    }
    
    if ( nextMoveCounter === 0 ) {
      return;
    }
      
    moves(nextMove.i, nextMove.j);
  }  
  
  // find row and col start points;
  let row = findStartPointRow(board);
  let col = findStartPointRow(board[row])
  
  // call recursive function
  moves(row, col);
  
  // return number of carrots eaten after moves finishes
  return carrotsEaten;
};

 