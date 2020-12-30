const fs = require('fs')
const N = +fs.readFileSync('/dev/stdin').toString()

console.log(solution(N))

function solution(N) {
  const decimals = findAllDecimal(N)
  let count = 0
  let subTotal = 0

  let start = -1
  let end = -1
  while(start < decimals.length) {
    if (subTotal <= N) {
      start++
      subTotal += decimals[start]
    } else if (subTotal > N) {
      end++
      subTotal -= decimals[end]
    }

    if (subTotal === N) {
      count += 1
    }
  }

  return count
}

function findAllDecimal(num) {
  const arr = new Array(num + 1).fill().map((n, i) => i === 1 ? 0 : i)
  const result = []
  for (const a of arr) {
    if (a) {
      result.push(a)
      for (let j = a * 2; j <= num; j += a) {
        arr[j] = 0
      }
    }
  }
  return result
}
