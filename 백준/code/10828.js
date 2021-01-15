let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0]

solution(N, input)

function solution(N, arr) {
  const stack = []
  const printData = []
  for (let i = 1; i <= N; i++) {
    const [method, numStr] = arr[i].trim().split(' ')
    switch (method) {
      case 'push':
        stack.push(+numStr)
        break
      case 'pop':
        printData.push(stack.pop() || -1)
        break
      case 'size':
        printData.push(stack.length)
        break
      case 'empty':
        printData.push(stack.length ? 0 : 1)
        break
      case 'top':
        printData.push(stack[stack.length - 1] || -1)
        break
      default:
        break
    }
  }
  console.log(printData.join('\n'))
}
