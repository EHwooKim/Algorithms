const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function(line) {
  input.push(line)
}).on('close', function() {
  const [input1, ...input2] = input

  const [N, M, V] = input1.split(' ').map(n => +n)
  const arr = input2.map(n => n.split(' ').map(n => +n))

  solution(N, M, V, arr)

  function solution(N, M, V, arr) {
    const nodeArr = new Array(N + 1).fill().map(() => [])
    
    for (const a of arr) {
      nodeArr[a[0]].push(a[1])
      nodeArr[a[1]].push(a[0])
    }  
    nodeArr.forEach(a => a.sort((a, b) => a - b))

    const dfsResult = makeDFS(N, nodeArr)(V)
    const bfsResult = BFS(N, V, nodeArr)
    console.log(...dfsResult)
    console.log(...bfsResult)
  }

  function makeDFS(N, nodeArr) {
    const visited = new Array(N + 1).fill(false)

    return function DFS(node) {
      if (visited[node]) return []
      visited[node] = true

      let list = [node]

      for (const a of nodeArr[node]) {
        list = list.concat(DFS(a))
      }
      return list
    }
  }


  function BFS(N, V, nodeArr) {
    const visited = new Array(N + 1).fill(false)
    visited[V] = true

    let bfsResult = []

    let bfs = [V]
    while (bfs.length) {
      const current = bfs.shift()
      bfsResult.push(current)

      for (const a of nodeArr[current]) {
        if (!visited[a]) {
          visited[a] = true
          bfs.push(a)
        }
      }
    }
    return bfsResult
  }

  process.exit()
})
