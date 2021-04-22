const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = 0

rl.on('line', line => {
  input = +line
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {
    if (input % 10) {
      return -1
    }

    const buttons = [300, 60, 10]

    const result = buttons.map(button => {
      const [moc, na] = divmod(input, button)
      input = na
      return moc
    })

    return result.join(' ')
  }

  function divmod(num1, num2) {
    return [Math.floor(num1/num2), num1%num2]
  }

  process.exit()
})