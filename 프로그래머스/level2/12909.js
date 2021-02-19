function solution(str) {
  let openCount = 0
  for (const s of str) {
    if (s === '(') {
      openCount += 1
    } else {
      if (openCount === 0) {
        return false
      }
      openCount -= 1
    }
  }

  if (openCount) return false
  
  return true
}