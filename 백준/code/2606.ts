import readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
  const [input1, input2, ...input3] = input

  const N: number = parseInt(input1)
  const M: number = parseInt(input2)
  const arr: number[][] = input3.map(a => a.split(' ').map(n => +n))

  console.log(solution(N, arr))

  function solution(N: number, arr: number[][]) {
    const nodeArr: number[][] = Array.from({ length: N + 1 }, () => [])
    
    for (const path of arr) {
      nodeArr[path[0]].push(path[1])
      nodeArr[path[1]].push(path[0])
    }
    return makeDFS(N, nodeArr)(1) - 1
  }

  function makeDFS(N: number, nodeArr: number[][]) {
    const visited: boolean[] = Array.from({ length: N + 1 }, () => false)

    return function DFS(node: number):number {
      if (visited[node]) return 0
      visited[node] = true
      let count = 1
      for (const n of nodeArr[node]) {
        count += DFS(n)
      }
      return count
    }
  }
  process.exit();
});