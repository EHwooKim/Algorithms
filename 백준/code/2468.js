const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let N = 0
const arr = []
rl.on('line', line => {
  if (N) {
    arr.push(line.split(' ').map(Number))
  } else {
    N = +line
  }
  
}).on('close', () => {

  console.log(solution(N, arr))

  function solution(N, arr) {
    let minHeight = Number.MAX_SAFE_INTEGER
    let maxHeight = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        minHeight = Math.min(minHeight, arr[i][j])
        maxHeight = Math.max(maxHeight, arr[i][j])
      }
    }

    let result = 1

    for (let height = minHeight; height <= maxHeight; height++) {
      result = Math.max(result, safeArea(height, arr))
    }

    return result
  }

  function safeArea(height, arr) { 
    const N = arr.length
    const visited = Array.from({ length: N }, () => Array(N).fill(false))
    const direaction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let areaCount = 0

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (arr[i][j] > height && !visited[i][j]) {
          areaCount += 1

          const bfs = [[i, j]]
          visited[i][j] = true

          while (bfs.length) {
            const [x, y] = bfs.shift()
            for (const d of direaction) {
              const dx = x + d[0]
              const dy = y + d[1]
              if (arr[dx] && arr[dx][dy] > height && !visited[dx][dy]) {
                visited[dx][dy] = true
                bfs.push([dx, dy])
              }
            }
          }

        }
      }
    }

    return areaCount
  }

  process.exit()
})
