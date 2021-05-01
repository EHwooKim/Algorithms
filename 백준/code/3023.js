const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [row, col] = input[0].split(' ').map(Number)
  const pattern = []
  for (let i = 1; i <= row; i++) {
    pattern.push(input[i].split(''))
  }
  const error = input[input.length - 1].split(' ').map(Number)

  console.log(solution(pattern, error))

  function solution(pattern, error) {
    const firstPattern = pattern.map((p) => {
      const leftPattern = [...p]
      const rightPattern = p.reverse()
      return leftPattern.concat(rightPattern)
    })

    const savedPattern = [...firstPattern]
    const secondPattern = savedPattern.concat([...firstPattern.reverse()])

    const [i, j] = error
    const lastApttern = JSON.parse(JSON.stringify(secondPattern))
    lastApttern[i - 1][j - 1] = lastApttern[i - 1][j - 1] === '#' ? '.' : '#'
    
    return lastApttern.map(pattern => pattern.join('')).join('\n')
  }

  process.exit()
})
