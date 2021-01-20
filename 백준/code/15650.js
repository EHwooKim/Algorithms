const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

solution(N, M)

function solution(N, M) {
  const combiArr = combination(N, M)
  for (const arr of combiArr) {
    console.log(...arr)
  }
}

function combination(N, M) {
  const result = []
  const tmp = []

  combi(1)

  function combi(index) {
    if (tmp.length === M) {
      result.push([...tmp])
      return
    }

    for (let i = index; i <= N; i++) {
      tmp.push(i)
      combi(i + 1)
      tmp.pop()
    }
  }
  return result
}

