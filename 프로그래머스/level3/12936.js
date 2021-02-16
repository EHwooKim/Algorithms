console.log(solution(3, 6))

function solution(n, k) {
  k -= 1
  let numArr = new Array(n).fill().map((_, i) => i + 1)
  let result = []
  
  while (true) {
    const div = factorial(--n)
    const [moc, na] = divmod(k, div)
    k = na
    result.push(numArr[moc])
    numArr.splice(moc, 1)

    if (numArr.length === 2) {
      const rest = k === 0 ? [...numArr] : [...numArr.reverse()]
      result = result.concat(rest)
      break
    }
  }
  return result
}

function divmod(a, b) {
  return [Math.floor(a/b), a % b]
}

function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
