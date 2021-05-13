
function solution(s) {
  let arr = [...s]
  if (arr.length%2) return 0
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (isGood(arr) === Math.floor(arr.length / 2)) {
      result += 1
    }
    const removed = arr.shift()
    arr.push(removed)
  }
  return result
}

function isGood(str) {
  const count = {
    '(': 0,
    '[': 0,
    '{': 0
  }
  let isGoodCount = 0
  for (const s of str) {
    if (Object.keys(count).findIndex(n => n === s) >= 0) {
      count[`${s}`] += 1
    } else {
      if (s === ')') {
        if (count['('] !== 0)  {
          isGoodCount += 1
          count[`(`] -= 1
        }
      } else if (s === ']') {
        if (count['['] !== 0)  {
          isGoodCount += 1
          count[`[`] -= 1
        }
      } else if (s === '}') {
        if (count['{'] !== 0)  {
          isGoodCount += 1
          count[`{`] -= 1
        }
      }
    }
  }
  return isGoodCount
}

solution("[](){}")
