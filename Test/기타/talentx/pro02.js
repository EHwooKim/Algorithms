function closestSquaredDistance(x, y) {
  let MIN = Number.MAX_SAFE_INTEGER
  const getIndex = combination(x.length)

  while (true) {
    const { value, done } = getIndex.next()

    if (done) break
    
    const [index1, index2] = value
    
    const distance = (x[index1] - x[index2])**2 + (y[index1] - y[index2])**2
    MIN = Math.min(MIN, distance)
  }

  return MIN
}

function* combination(n) {
  let first = 0
  let second = 1

  while (true) {
    yield [first, second]
    second += 1

    if (second === n) {
      first += 1
      second = first + 1
    }

    if (first === n - 1) {
      return
    }
  }
}
