const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(roomNumber) {
    const count = new Array(10).fill(0)

    for (let number of roomNumber) {
      if (number === '9') {
        number = '6'
      }
      number = +number
      count[number] = count[number] === 0 ? 1 : count[number] + 1
    }

    count[6] = Math.ceil(count[6] / 2)

    return Math.max(...count)
  }

  process.exit()
})

