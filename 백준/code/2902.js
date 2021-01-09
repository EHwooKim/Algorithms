const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants')
const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(str) {
    let result = str[0]
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '-') {
        result += str[i + 1]
      }
    }
    return result
  }

  process.exit()
})
