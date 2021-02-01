const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const N = +readline()

solution(N)

function solution(N) {
  const room = []
  for (let i = 0; i < N; i++) {
    room.push(readline())
  }

  let emptyCount = {
    row: 0,
    col: 0
  }

  for (let i = 0; i < N; i++) {
    let check = 0
    for (let j = 0; j < N; j++) {
      if (room[i][j] === '.') {
        check += 1
      } else {
        if (check >= 2) {
          emptyCount.row++
        }
        check = 0
      }
    }
    if (check >= 2) {
      emptyCount.row++
    }
  }
  for (let i = 0; i < N; i++) {
    let check = false
    for (let j = 0; j < N; j++) {
      if (room[j][i] === '.') {
        check += 1
      } else {
        if (check >= 2) {
          emptyCount.col++
        }
        check = 0
      }
    }
    if (check >= 2) {
      emptyCount.col++
    }
  }

  console.log(...Object.values(emptyCount))
}