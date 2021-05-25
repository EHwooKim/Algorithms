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
    const [N, M] = input[0].split(' ').map(Number)
    const beforeArr = input.slice(1, 1 + N)
    const afterArr = input.slice(1 + N)
    
    const extendedArr = beforeArr.map(str => {
      let tmp = ''
      for (const s of str) {
        tmp += s.repeat(2)
      }
      return tmp
    })

    let result = 'Eyfa'
    
    for (let i = 0; i < N; i++) {
      if(extendedArr[i] !== afterArr[i]) {
        result = 'Not Eyfa'
        break
      }
    }

    return result
  }

  process.exit()
})