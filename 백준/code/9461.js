const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    return arr.map(triangle).join('\n')
  }

  function triangle(n) {
    const arr = [0, 1, 1, 1, 2, 2];
  
    return (function tri(n) { 
      if (n < arr.length) {
        return arr[n]
      } else {
        const newNumber = tri(n - 1) + tri(n - 5)
        arr.push(newNumber)
        return newNumber
      }
    })(n)
  }

  process.exit()
})
