const checkBlock = (a, b, arr) => {
  const num = arr[a][b]
  if (num === arr[a + 1][b] && num === arr[a][b + 1] && num === arr[a + 1][b + 1]) {
    return true
  }
  return false
}

const downBlock = (M, N, board) => {
  let arr = Array(M).fill().map(() => Array(N).fill(0))
  for (let j = 0; j < N; j++) {
    let tmp = M - 1
    for (let i = M - 1; i > -1; i-- ) {
      if (board[i][j]) {
        arr[tmp][j] = board[i][j]
        tmp -= 1
      }
    }
  }
  return arr
}

const count = (arr) => {
  let result = 0
  arr.forEach(row => {
    row.forEach(d => {
      if (d === 0) result += 1
    })
  })
  return result
}

const solution = (M, N, board) => {
  board = board.map((v) => [...v])
  let arr
  while (true) {
    arr = []
    for (let i = 0; i < M - 1; i++) {
      for (let j = 0; j < N - 1; j++) {
        if (board[i][j] && checkBlock(i, j, board)) {
          arr = arr.concat([[i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]])
        }
      } 
    }
    if (!arr.length) {
      break
    }
    arr.forEach((v) => board[v[0]][v[1]] = 0)
    board = downBlock(M, N, board)
  }
  const result = count(board)
  return result
}


console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']))
