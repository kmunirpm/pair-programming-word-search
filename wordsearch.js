const wordSearch = (letters, word) => { 
    if (word === "") return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    const full = horizontalJoin.concat(verticalJoin);

    for (l of full) {
        if (l.includes(word)) return true
    }    
}


const transpose = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    return matrix;
}


module.exports = wordSearch