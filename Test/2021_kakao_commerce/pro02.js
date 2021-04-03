function solution(needs, r) {
  const numberOfPart = needs[0].length

  return combination(numberOfPart, r, needs)
}

function combination(size, count, needs) {
  const combiArr = new Array(size).fill(0);
  let maxCount = 0;

  (function combi(start, depth, used) {
    if (depth === count) {
      const possibleProducts = needs
        .filter(need => (need.every((v, i) => (v & combiArr[i]) | !v)))
        .length

      maxCount = Math.max(maxCount, possibleProducts)
      return
    }

    for (let i = start; i < size; i++) {
      if (used & (1<<i)) continue
      combiArr[i] = 1
      combi(i+1, depth+1, used | (1<<i))
      combiArr[i] = 0
    }
  })(0, 0, 0)

  return maxCount
}


solution([[ 1, 0, 0 ], [1, 1, 0], [1, 1, 0], [1, 0, 1], [1, 1, 0], [0, 1, 1] ], 2)