const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.trim())
}).on('close', () => {

  const [size, ...pattern] = input
  const [R, C, ZR, ZC] = size.split(' ').map(Number)

  console.log(solution(R, C, ZR, ZC, pattern))

  function solution(R, C, ZR, ZC, pattern) {
    const result = []

    const afterZC = pattern.map(row => {
      let tmp = ''
      for (const r of row) {
        tmp += r.repeat(ZC)
      }
      return tmp
    })

    afterZC.forEach(row => {
      for (let i = 0; i < ZR; i++) {
        result.push(row)
      }
    })

    return result.join('\n')
  }

  process.exit()
})