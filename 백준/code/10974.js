const input = +require('fs').readFileSync('/dev/stdin').toString()

solution(input)

function solution(N) {
  const result = permutation(N)
  for (const arr of result) {
    console.log(...arr)
  }
}

function permutation(N) {
  const numbers = new Array(N).fill(0).map((_, i) => i + 1)
  let result = [];
  let tmp = [];

  (function permu(used) {
    if (tmp.length === N) {
      result.push([...tmp])
    }
    
    for (let i = 0; i < N; i++) {
      if (used & (1 << i)) continue
      
      tmp.push(numbers[i])
      permu(used | (1<<i))
      tmp.pop()
    }
  })(0)
  
  return result
}