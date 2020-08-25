const divmod = (a, b) => {
  return [parseInt(a/b), a % b]
}

const euclidean = (a, b) => {
  if (b === 0) {
    return a
  }
  let big = Math.max(a, b)
  let small = Math.min(a, b)
  
  let [c, d] = divmod(big, small)
  return 0 + euclidean(small, d)
}

const solution = (w, h) => {
  const total = w * h
  const d = euclidean(w, h)
  return total - (parseInt(w/d) + parseInt(h/d) - 1) * d
}
console.log(solution(8, 12))