const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, secret, str] = input  
  console.log(solution(N, secret, str))

  function solution(N, secret, str) {
    const exist = new Array(53).fill(0)
    secret.split(' ').map(Number).forEach(n => exist[n] = 1)

    const upper = 'QAZWSXEDCRFVTGBYHNUJMIKOLP'
    const lower = 'qazwsxedcrfvtgbyhnujmikolp'
    
    for (const s of str) {
      let index = s.charCodeAt()
      if (upper.includes(s)) {
        index -= 64
      } else if (lower.includes(s)) {
        index -= 70
      } else {
        index -= 32
      }
      if (!exist[index]) {
        return 'n'
      }
    }
    return 'y'
  } 

  process.exit()
})