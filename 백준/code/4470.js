const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    const result = arr.map((str, index) => {
      return `${index + 1}. ${str}`
    })
    return result.join("\n")
  }

  process.exit()
})
