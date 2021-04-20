const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(N, arr))

  function solution(N, arr) {
    let room = {}
    arr.forEach(line => {
      const [name, type] = line.split(' ')
      if (type === 'enter') {
        room[name] = 1
      } else {
        room[name] = 0
      }
    })

    const result = []

    for (const name in room) {
      if (room[name]) {
        result.push(name)
      }
    }

    result.sort((a, b) => a > b ? -1 : (a < b ? 1 : 0))

    return result.join('\n')
  }

  process.exit()
})
