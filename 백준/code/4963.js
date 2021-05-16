const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const solution = Solution()
solution.next()

rl.on('line', line => {
  solution.next(line)
}).on('close', () => {
  process.exit()
})

function* Solution() {
  while (true) {
    const [col, row] = (yield).split(' ').map(Number)
    if (row === 0) return 
  
    const world = []
    for (let i = 0; i < row; i++) {
      world.push((yield).split(' ').map(Number))
    }
  
    console.log(countIsland(row, col, world))
  }
}

function countIsland(row, col, world) {
  const visited = Array.from({ length: row }, () => Array(col).fill(false))
  const direction = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  let count = 0
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (world[i][j] && !visited[i][j]) {
        const bfs = [[i, j]]
        visited[i][j] = true

        while (bfs.length) {
          const [x, y] = bfs.shift()
          
          for (const d of direction) {
            const dx = x + d[0]
            const dy = y + d[1]

            if (world[dx] && world[dx][dy] && !visited[dx][dy]) {
              visited[dx][dy] = true
              bfs.push([dx, dy])
            }
          }
        }

        count += 1
      }
    }
  }

  return count
}
