const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

solution(N, M)

function solution(N, M) {
  const combiArr = depleCombination(N, M)
  console.log(combiArr.map(n => n.join(' ')).join('\n'))
}

function depleCombination(N, M) {
  const result = []
  const tmp = []

  combi()

  function combi() {
    if (tmp.length === M) {
      result.push([...tmp])
      return
    }

    for (let i = 1; i <= N; i++) {
      if (!tmp[tmp.length - 1] || tmp[tmp.length - 1] <= i) {
        tmp.push(i)
        combi()
        tmp.pop()
      }
    }
  }
  return result
}
