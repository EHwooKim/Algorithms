const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [pattern, N, ...rings] = input

  console.log(solution(pattern, rings))

  function solution(pattern, rings) {
    return rings.filter(ring => {
      for (let i = 0; i < ring.length; i++) {
        if (findRing(pattern, ring, i)) {
          return true
        }
      }
      return false
    }).length
  }

  function findRing(pattern, ring, startIndex) {
    let patternIndex = 0
    let ringIndex = startIndex
  
    while (true) {
      if (pattern[patternIndex] !== ring[ringIndex % ring.length]) {
        return false
      }

      if (patternIndex === pattern.length - 1) {
        return true
      }
  
      patternIndex += 1
      ringIndex += 1
    }
  }

  process.exit()
})
