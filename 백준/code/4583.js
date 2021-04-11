const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  if (line === '#') {
    process.exit()
  }
  console.log(solution(line))
})


function solution(word) {
  const mirrorWords = ['i', 'o', 'v', 'w', 'x']
  let result = 'INVALID'
  const wordArr = [...word]
  const isMirror = wordArr.every((w, i) => {
    if (w === 'p') {  
      wordArr[i] = 'q'
    } else if (w === 'q') {
      wordArr[i] = 'p'
    } else if(w === 'b') {
      wordArr[i] = 'd'
    } else if (w === 'd') {
      wordArr[i] = 'b'
    } else {
      return mirrorWords.findIndex(n => n === w) >= 0
    }
    
    return true
  })

  if (isMirror) {
    result = wordArr.reverse().join('')
  }

  return result
}