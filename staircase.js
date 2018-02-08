function staircase(n) {
  var n = parseInt(n);
 
    for( let i = 0; i < n; i++ ) {
        let s = "";
        for( let j = 0; j < n; j++ ) {
            if( n - i - 2 < j ) {
                s += "#";
            } else {
                s += " ";
            }
        }   
        console.log(s);
    }
}