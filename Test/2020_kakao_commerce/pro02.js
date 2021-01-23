function solution(m, v) {
  const board = []

  v.forEach(blockSize => {
    let possibleIndex = null

    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i] < blockSize) break
      possibleIndex = i
    }

    if (possibleIndex !== null) {
      board[possibleIndex] -= blockSize
    } else {
      board.push(m - blockSize)
    }
  })
  console.log(board)

  return board.length
}


solution(4, [2, 3, 1])
solution(4, [3, 2, 3, 1])