console.log(solution(4, [4, 3, 3]))
console.log(solution(3, [1, 1]))

function solution(n, works) {
  works.sort((a, b) => b - a)

  while (true) {
    const maxValue = works[0]

    if (n === 0 || maxValue === 0) {
      break
    }

    let lastIndex = null
    for (let i = 0; i < works.length; i++) {
      if (works[i] === maxValue) {
        lastIndex = i
      } else {
        break
      }
    }

    for (let i = lastIndex; i >= 0; i--) {
      works[i] -= 1
      n -= 1
      if (n === 0) break
    }
  }

  let result = 0
  for (let i = 0; i < works.length; i++) {
    result += works[i] ** 2
  }

  return result
}
