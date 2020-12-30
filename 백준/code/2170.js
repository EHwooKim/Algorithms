const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input.map(a => {
  const strArr = a.split(' ')
  const start = +strArr[0]
  const end = +strArr[1]
  return start < end ? [start, end] : [end, start]
})

console.log(solution(+N, arr))

function solution(N, arr) {
  arr.sort((a, b) => a[0] - b[0])

  let result = 0
  let currentStart = -1000000001
  let currentEnd = -1000000001

  for (let i = 0; i < N; i++) {
    const start = arr[i][0]
    const end = arr[i][1]
    
    if (start <= currentEnd) {
      currentEnd = Math.max(currentEnd, end)
    } else {
      result += (currentEnd - currentStart)
      currentStart = start
      currentEnd = end
    }
  }
  result += (currentEnd - currentStart)
  return result
}

