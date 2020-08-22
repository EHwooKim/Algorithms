function solution(citations) {
  let result = 0
  for (let i = 0; i <= citations.length; i += 1) {
    let below = 0
    let over = 0
    citations.forEach(v => {
      if ( v < i ) {
        below += 1
      } else if ( v > i ) {
        over += 1
      } else {
        below += 1
        over += 1
      }
    })
    if (below <= i && over >= i) {
      result = i
    }
  }
  return result
}

console.log(solution([3, 0, 6, 1, 5]))