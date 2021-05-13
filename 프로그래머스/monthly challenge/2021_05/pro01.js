const findDivisor = (number) => {
  let count = 0
  const square = number ** (1/2)
  for (let i = 1; i < square; i++) {
    if (!(number % i)) {
      count += 1
    }
  }

  count *= 2

  if (Number.isInteger(square)) {
    count += 1
  }

  return count
}
const isOdd = n => n % 2

function solution(left, right) {
  let result = 0
  for (let i = left; i <= right; i++) {
    const divisorCount = findDivisor(i)
    if (isOdd(divisorCount)) {
      result -= i
    } else {
      result += i
    }
  }
  return result
}

console.log(solution(13, 17))
console.log(solution(24, 27))