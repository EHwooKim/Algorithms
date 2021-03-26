const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(solution(input))

function solution(str) {
  const count = {
    happy: 0,
    sad: 0
  }

  let index = 0

  while (index < str.length) {
    if (str[index] === ':') {
      const face = str.substr(index, 3)
      if (face === ':-)') {
        count.happy += 1
      } else if (face === ':-('){
        count.sad += 1
      }
    }
    
    index += 1
  }

  let result
  if (count.happy + count.sad === 0) {
    result = 'none'
  } else if (count.happy === count.sad) {
    result = 'unsure'
  } else if (count.happy > count.sad) {
    result = 'happy'
  } else {
    result = 'sad'
  }

  return result
}

