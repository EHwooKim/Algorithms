const checkDecimal = (num) => {
  const sqrtNum = parseInt(Math.sqrt(num))
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false
  }
  return true
}

const makeNumber = (depth, iter, tmpNum, used, result) => {
  const num = parseInt(tmpNum) || 0
  if (depth >= 1 && num >= 2 && !result.includes(num)) {
    result.push(num)
  }
  if (depth === iter.length) {
    return result
  }
  for (let i = 0; i < iter.length; i++) {
    if (used & (1 << i)) {
      continue
    }
    result = makeNumber(depth + 1, iter, tmpNum + iter[i], used | (1 << i), result)
  }
  return result
}

const solution = (numbers) => (
  makeNumber(0, numbers, '', 0, [])
    .reduce((acc, cur) => acc + checkDecimal(cur), 0)
)

console.log(solution('17'))
console.log(solution('011'))

