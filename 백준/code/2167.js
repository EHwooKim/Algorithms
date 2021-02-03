const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const stringToNumArr = str => str.split(' ').map(Number)

const [N, M] = stringToNumArr(readline())

solution(N, M)

function solution(N, M) {
  const input = []
  for (let i = 0; i < N; i++) {
    input.push(stringToNumArr(readline()))
  }

  const K = +readline()
  for (let i = 0; i < K; i++) {
    const [i, j, x, y] = stringToNumArr(readline())
    console.log(subTotal(input, i, j, x, y))
  }
}

function subTotal(arr, i, j, x, y) {
  let total = 0
  for (let a = i - 1; a < x; a++) {
    for (let b = j - 1; b < y; b++) {
      total += arr[a][b]
    }
  }
  return total
}
