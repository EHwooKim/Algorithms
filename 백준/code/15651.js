const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

solution(N, M)

function solution(N, M) {
  const permuArr = deplePermutation(N, M)
  console.log(permuArr.map(n => n.join(' ')).join('\n'))
}

function deplePermutation(N, M) {
  const result = []
  const tmp = []

  permu()

  function permu() {
    if (tmp.length === M) {
      result.push([...tmp])
      return
    }

    for (let i = 1; i <= N; i++) {
      tmp.push(i)
      permu()
      tmp.pop()
    }
  }
  return result
}