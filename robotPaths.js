/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board = makeBoard(n), i, j) {
  // solution counter
  let solutions = 0;
  // recurse function
  let moves = function(i,j) {
    // check if it target, if so increment solutions
    if ( i === n - 1 && j === n - 1 ) {
      solutions++
      return;
    }
    // check to see if off board 
    if ( i < 0 || i >= n || j < 0 || j >= n ) {
      return;
    }

    // check if spot has been toggled
    if ( board.hasBeenVisited(i, j) ) {
      return;
    } else {
      // toggle spot
      board.togglePiece(i, j)
      // check all possible positions with recurse function
      // up
      moves(i - 1, j);
      // right 
      moves(i, j + 1);
      // down
      moves(i + 1, j);
      // left
      moves(i, j - 1);
      // if all moves have been made and no openings, toggle piece back
      board.togglePiece(i, j)
    }
    // Robot checks all directions to see which options are available

    // Robot takes frist path available, moves to that spot and toggles piece. 
    // this keeps happening until back at the beginning of board with no more moves possible
      // robot then rechecks all directions and repeats until hitting bottom right corner
      // once hit, increment the solution counter
      // then move back a space, check to see all possible options
        // if none, move back another and repeat

  }
  moves(0, 0)
  return solutions;
};










 
