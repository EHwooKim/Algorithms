function solution(s, idx) {
  const pairIndex = Array(s.length).fill(0)
  const openedIndex = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
      openedIndex.push(i)
    } else if (s[i] === '}'){
      const j = openedIndex.pop()
      pairIndex[i] = j
      pairIndex[j] = i
    }
  }
  
  const result = idx.map(i => pairIndex[i])
  return result
}


console.log(solution("{cpp{java}}{python}", [0, 4, 9, 10, 11, 18])) // [10, 9, 4, 0, 18, 11]
console.log(solution("ab{}cd{efg{}h}{ij}", [3, 6, 11, 3, 14, 11])) // [2, 13, 10, 2, 17, 10]