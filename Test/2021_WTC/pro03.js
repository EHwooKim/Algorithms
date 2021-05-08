function solution(prices) {
  const upperLower = prices.map((_, i, arr) => check(arr, i))
  
  const result = []
  for (let i = 0; i < prices.length; i++) {
    const now = upperLower[i]
    if (now === 1 || now === -1) {
      result.push(longestWidth(upperLower, i) * now)
    }
  }

  return result
}

function check(arr, index) {
  const [before, now, after] = [arr[index - 1], arr[index], arr[index + 1]]
  if (before < now && after < now) {
    return 1
  }
  if (before > now && after > now) {
    return -1
  }
  if (before === now || now === after) {
    return 2
  }
  return 0
}

function longestWidth(arr, i) {
  let index = i
  let leftCount = 0
  let rightCount = 0

  while (true) {
    index -= 1
    leftCount += 1
    if (arr[index]) break
    if (index === 0) break
  }

  index = i
  while (true) {
    index += 1
    rightCount += 1
    if (arr[index]) break
    if (index === arr.length - 1) break
  }
  return Math.min(leftCount, rightCount)
}