const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
})
const go = (...args) => reduce((a, f) => f(a), args)
const L = {}
L.map = curry(function *(f, iter) {
  for (const a of iter) {
    yield f(a)
  }
})

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {

  const setMinValue = min => value => Math.max(min, value)
  
  const average = curry((length, iter) => reduce((a, b) => a + b/length, 0, iter))

  console.log(solution(input, 40))

  function solution(input, min) {
    return go(
      input,
      L.map(setMinValue(min)),
      average(input.length)
    )
  }

  process.exit()
})


// function solution(arr) {
//   const total = arr.reduce((a, b) => {
//     if (b < 40) b = 40
//     return a + b
//   }, 0)
//   return total / arr.length
// }
