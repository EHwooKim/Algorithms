const readline = (() => {
  let idx = 0 
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const N = +readline()

solution(N)

function solution(N) {
  const queue = []
  const printData = []
  for (let i = 0; i < N; i++) {
    const [method, value] = readline().trim().split(' ')
    switch (method) {
      case 'push':
        queue.push(+value)
        break
      case 'pop':
        printData.push(queue.shift() || -1)
        break
      case 'size':
        printData.push(queue.length)
        break
      case 'empty':
        printData.push(queue.length ? 0 : 1)
        break
      case 'front':
        printData.push(queue[0] || -1)
        break
      case 'back':
        printData.push(queue[queue.length - 1] || -1)
        break
      default:
        break
    }
  }
  console.log(printData.join('\n'))
}