const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const N = +readline()

solution(N)

function solution(N) {
  const points = [100, 100]

  for (let i = 0; i < N; i++) {
    const dice = readline().split(' ').map(Number)
    if (dice[0] < dice[1]) {
      points[0] -= dice[1]
    } else if (dice[1] < dice[0]) {
      points[1] -= dice[0]
    }
  }

  for (const point of points) {
    console.log(point)
  }
}