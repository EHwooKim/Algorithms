const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

solution(...input)

function solution(N, M) {
  const numArr = new Array(N).fill(0).map((_,i) => i + 1)
  const permutationArr = permutation(numArr, M)
  for (const nums of permutationArr) {
    console.log(...nums)
  }
}

function permutation(arr, count) {
  let result = []
  let tmp = []

  permu(0)

  function permu(used) {

    if (tmp.length === count) {
      result.push([...tmp])
      return
    }

    for (let i = 0; i < arr.length; i++) {
      if (used & (1 << i)) continue
      tmp.push(arr[i])
      permu(used | (1 << i))
      tmp.pop()
    }
  }
  return result
}