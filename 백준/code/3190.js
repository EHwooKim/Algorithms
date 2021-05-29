const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {
    const getData = (() => {
      let idx = 0
      return () => input[idx++]
    })()

    const N = +getData()
    const room = Array.from({ length: N }, () => Array(N).fill(1))
    room[0][0] = 2

    const K = +getData()
    for (let i = 0; i < K; i++) {
      const [x, y] = getData().split(' ').map(Number)
      room[x-1][y-1] = 3
    }

    const L = +getData()
    const move = {}
    for (let i = 0; i < L; i++) {
      const [sec, d] = getData().split(' ')
      move[sec] = d
    }

    const direction = [{x: -1, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 0, y: -1}]

    const snake = {
      direction: 1,
      body: [{ x: 0, y: 0 }]
    }
    let time = 0
    
    while (true) {
      time += 1
      
      const d = direction[snake.direction]
      const tmpHead = {
        x: snake.body[0].x + d.x,
        y: snake.body[0].y + d.y
      }

      const gameOver = !room[tmpHead.x] 
        || !room[tmpHead.x][tmpHead.y]
        || room[tmpHead.x][tmpHead.y] === 2

      if (gameOver) break

      snake.body.unshift({ ...tmpHead })
      if (room[tmpHead.x][tmpHead.y] === 1) {
        const tail = snake.body[snake.body.length - 1]
        room[tail.x][tail.y] = 1
        snake.body.pop()
      }
      room[snake.body[0].x][snake.body[0].y] = 2

      if (move[time] === 'D') {
        snake.direction = (snake.direction + 1) % 4
      }
      if (move[time] === 'L') {
        snake.direction = snake.direction ? snake.direction - 1 : 3
      }
    }    
    
    return time
  }

  process.exit()
})