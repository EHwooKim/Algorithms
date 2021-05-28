const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(' ').map(Number))
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {
    let [[N, M], [robotX, robotY, robotD], ...room] = input
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    let result = 0

    while (true) {

      if (!room[robotX][robotY]) {
        room[robotX][robotY] = 2
        result += 1
      }

      let skip = false

      for (let i = 1; i < 5; i++) {
        const d = robotD - i >= 0 ? robotD - i : robotD - i + 4
        const [x, y] = directions[d]
        
        const dx = robotX + x,
              dy = robotY + y 

        if (!room[dx][dy]) {
          robotX = dx
          robotY = dy
          robotD = d
          skip = true
          break
        }
      } 

      if (skip) continue

      const [bx, by] = robotD > 1 ? directions[robotD - 2] : directions[robotD + 2]
      const backX = robotX + bx,
            backY = robotY + by

      if (room[backX][backY] === 2) {
        robotX = backX
        robotY = backY
        continue
      }

      if (room[backX][backY] === 1) break

    }

    return result
  }

  process.exit()
})

