const readline = (() => {
  let index = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[index++]
})()

const N = +readline().trim()

const arr = []
for (let i = 0; i < N; i++) {
  arr.push(readline().trim().split(' ').map(Number))
}

console.log(solution(N, arr))

function solution(N, arr) {
  const player = new Array(N).fill(0).map((_, i) => i)
  const combiArr = combination(player, N / 2)

  let minDiff = Infinity

  for (let i = 0; i < combiArr.length / 2; i++) {
    const team1 = combiArr[i]
    const team2 = combiArr[combiArr.length - 1 - i]
    const point1 = arrSum(arr, team1)
    const point2 = arrSum(arr, team2)
    const diff = Math.abs(point1 - point2)
    minDiff = Math.min(minDiff, diff)
  }
  return minDiff
}

function combination(arr, count) {
  const result = []
  const tmp = []

  combi(0)

  function combi(index) {
    if (tmp.length === count) {
      result.push([...tmp])
      return
    }

    for (let i = index; i < arr.length; i++) {
      tmp.push(arr[i])
      combi(i + 1)
      tmp.pop()
    }
  }
  return result
}

function arrSum(infoArr, teamArr) {
  let result = 0
  for (let i = 0; i < teamArr.length - 1; i++) {
    for (let j = i + 1; j < teamArr.length; j++) {
      result += infoArr[teamArr[i]][teamArr[j]]
      result += infoArr[teamArr[j]][teamArr[i]]
    }
  }
  return result
}
