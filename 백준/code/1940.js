const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

console.log(solution())

function solution() {
  const N = +readline()
  const M = +readline()
  const used = new Array(N).fill(0)
  const arr = readline().split(' ').map(Number)
  arr.sort((a, b) => b - a)

  let count = 0

  for (let i = 0; i < N; i++) {
    if (arr[i] > M) continue 

    let tmp = -1
    for (let j = i + 1; j < N; j++) {
      if (used[j]) continue
      if (arr[i] + arr[j] < M) break
      if (arr[i] + arr[j] === M) {
        tmp = j
      }
    }

    if (tmp !== -1) {
      used[i] = 1
      used[tmp] = 1
      count += 1
    }
  }
  
  return count
}