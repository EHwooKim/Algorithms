const N = +require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(solution(N))

function solution(N) {
  let left = 0
  let right = N
  let answer = 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const sum = sumOnetoN(mid)

    if (sum <= N) {
      left = mid + 1
      answer = mid
    } else if (sum > N) {
      right = mid - 1
    }
  }

  return answer
}

function sumOnetoN(n) {
  return (n * (n + 1)) / 2
}