const countOne = numStr => [...numStr].filter(n => n === '1').length

const findMinValue = number => {
  let result = number
  while (true) {
    result += 1
    const diffBitCount = countOne((number ^ result).toString(2))
    if (diffBitCount <= 2) break
  } 
  return result
}

function solution(numbers) {
  return numbers.map(findMinValue)
}