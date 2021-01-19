function solution(dartResult) {
  let result = 0
  let numberStr = ''
  let prevNumber = 0
  let number = 0
  for (const char of dartResult) {
    if (char === '*') {
      result += prevNumber
      number *= 2   
    } else if (char === '#') {
      number *= -1
    } else if ('SDT'.includes(char)) {
      number = pow(+numberStr, char)
      numberStr = ''
    } else {
      if (numberStr === '') {
        result += number
        prevNumber = number
      }
      numberStr += char
    }
  }
  result += number
  return result
}

function pow(num, type) {
  const power = type === 'S' ? 1 : type ==='D' ? 2 : 3
  return Math.pow(num, power)
}

console.log(solution('1S2D*3T'))
console.log(solution('1D2S#10S'))
console.log(solution('1D2S3T*'))
