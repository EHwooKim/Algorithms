const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  solution(input)
  
  function solution(arr) {
    for (const str of arr) {
      if (str === '#') break
      console.log(countChar(str))
    }
  }

  function countChar(str) {
    const count = Array(26).fill(0)
    
    for (const s of str) {
      const charCode = s.toLowerCase().charCodeAt()
      if (charCode >= 97 && charCode <= 122) {
        count[charCode - 97] = 1
      }
    }

    return count.reduce((a, b) => a + b)
  }

  process.exit()
})