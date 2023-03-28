function unroll(square) {
    const result = [];
    let rowStart = 0;
    let rowEnd = square.length - 1;
    let colStart = 0;
    let colEnd = square.length - 1;
  
    while (rowStart <= rowEnd && colStart <= colEnd) {

      for (let i = colStart; i <= colEnd; i++) {
        result.push(square[rowStart][i]);
      }
      rowStart++;
  
      for (let i = rowStart; i <= rowEnd; i++) {
        result.push(square[i][colEnd]);
      }
      colEnd--;
  
      if (rowStart <= rowEnd) {
        for (let i = colEnd; i >= colStart; i--) {
          result.push(square[rowEnd][i]);
        }
        rowEnd--;
      }

      if (colStart <= colEnd) {
        for (let i = rowEnd; i >= rowStart; i--) {
          result.push(square[i][colStart]);
        }
        colStart++;
      }
    }
  
    return result;
  }
  

module.exports = unroll;
