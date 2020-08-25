const solution = (board, moves) => {
  let result = 0
  let basket = []

  moves.forEach((v) => {
    const n = board.length
    for (let i = 0; i < n; i++) {
      if (board[i][v - 1]) {
        const m = basket.length
        if ( m && basket[m - 1] === board[i][v - 1] ) {
          basket.pop()
          result += 2
        } else {
          basket.push(board[i][v - 1])
        }
        board[i][v - 1] = 0
        break
      }
    }
  })

  return result
}


console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))