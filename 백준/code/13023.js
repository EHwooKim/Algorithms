const fs = require('fs')

const readline = (() => {
  let idx = 0
  const input = fs.readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const [N, M] = readline().split(' ').map(n => +n)

console.log(solution(N, M))

function solution(N, M) {
  let nodeArr = Array.from({ length: N }, () => [])
  
  for (let i = 0 ; i < M; i++) {
    const [x, y] = readline().split(' ').map(n => +n)
    nodeArr[x].push(y)
    nodeArr[y].push(x)
  }

  const dfs = makeDfs(nodeArr)
  let friendFive = false

  for (let i = 0; i < N; i++) {
    if (!friendFive) {
      friendFive = dfs(i)
    }
  }
  return friendFive ? 1 : 0
}


function makeDfs(arr) {
  let visited =[]

  return function dfs(person) {
    visited.push(person)
    let result = false

    if (visited.length === 5) {
      return true
    }

    for (const p of arr[person]) {
      if (!visited.includes(p)) {
        result = dfs(p)
        if (result) break
      }
    }
    visited.pop()
    return result
  }
}
