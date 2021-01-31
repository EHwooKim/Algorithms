const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const [N, M] = readline().trim().split(' ').map(Number)

solution(N, M)

function solution(N, M) {
  const pocketmonByIndex = ['empty']
  const poketmonByName = {}
  for (let i = 0; i < N; i++) {
    const pocketmon = readline().trim()
    pocketmonByIndex.push(pocketmon)
    poketmonByName[pocketmon] = i + 1
  }

  for (let i = 0; i < M; i++) {
    const target = readline().trim()
    let result = null

    if (isNaN(target)) {
      result = poketmonByName[target]
    } else {
      result = pocketmonByIndex[+target]
    }

    console.log(result)
  }
}
