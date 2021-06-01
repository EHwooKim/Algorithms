const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []
rl.on('line', line => {
  input = line.split(' ').map(Number)
}).on('close', () => {
  const [N, M] = input

  console.log(solution(N, M))
  
  function solution(N, M) {
    let result = ''
    result = String(N).repeat(N)
    
    return result.slice(0, M)
  }

  process.exit()
})

