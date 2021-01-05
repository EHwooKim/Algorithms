const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', function(line) {
  input.push(line)
}).on('close', function() {
  const [input1, ...input2] = input
  const [N, M] = input1.split(' ').map(n => +n)
  const arr = input2.map(n => n.split(' ').map(n => +n))

  console.log(solution(N, M, arr))

  function solution(N, M, arr) {
    const lx = [0, 1, 0, -1]
    const ly = [1, 0, -1, 0]
    let goodPositions = []
    let badCount = 0

    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (arr[i][j] === 1) {
          goodPositions.push([i, j])
        }else if (arr[i][j] === 0){
          badCount += 1
        }
      }
    }
    if (badCount === 0) return 0

    let dayCount = 0

    while (goodPositions.length && badCount) {
      let newGoodPositions = []

      for (const position of goodPositions) {
        const [x, y] = position
        for (let k = 0; k < 4; k++) {
          const dx = x + lx[k]
          const dy = y + ly[k]
          if (arr[dx] && arr[dx][dy] === 0) {
            newGoodPositions.push([dx, dy])
            arr[dx][dy] = 1
            badCount -= 1
          }
        }
      }
      dayCount += 1
      goodPositions = [...newGoodPositions]
    }
    return badCount ? -1 : dayCount
  }
  process.exit()
})
