const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []

rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  const stations = input.map(str => {
    const data = str.split(' ')
    return {
      out: +data[0],
      in: +data[1]
    }
  })

  let total = 0
  let MAX = 0

  stations.forEach(station => {
    total += (station.in - station.out)
    MAX = Math.max(MAX, total)
  })
  
  console.log(MAX)
  
  process.exit()
})