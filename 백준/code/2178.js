const [input1, ...input2] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n')

const [N, M] = input1.split(' ').map(n => +n)
const arr = input2.map(n => n.split('').map(n => +n))

console.log(solution(N, M, arr))

function solution(N, M, arr) {
  const pathCounter = Array.from({length: N}, () => Array.from({length: M}, () => N * M))
  const lx = [0, 1, 0, -1]
  const ly = [1, 0, -1, 0]
  
  const bfs = [[0, 0, 1]]

  while (bfs.length) {
    const [x, y, count] = bfs.shift()

    for (let i = 0; i < 4; i++) {
      const dx = x + lx[i]
      const dy = y + ly[i]

      if (arr[dx] && arr[dx][dy] && (count + 1) < pathCounter[dx][dy]) {
        bfs.push([dx, dy, count + 1])
        pathCounter[dx][dy] = count + 1
      }
    }
  }
  return pathCounter[N - 1][M - 1]
}
