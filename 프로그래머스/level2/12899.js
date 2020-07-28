const divmod3 = a => [parseInt(a / 3), a % 3]

const solution = n => {
  if (n <= 3) {
    return '124'[n - 1]
  }

  let [q, r] = divmod3(n-1)
  return solution(q) + '124'[r]
}

console.log(solution(10))