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
  for (const a of iter) acc = f(acc, a)
  return acc
})
const go = (...args) => reduce((a, f) => f(a), args)
const map = curry((f, iter) => {
  const res = []
  for (const a of iter) res.push(f(a))
  return res
})
const L = {}
L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a)
})
L.range = function* (s, e) {
  if (!e) {
    e = s
    s = 1
  }
  let i = s - 1
  while (++i <= e) yield i
}

let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  const [start, end] = input.split(' ').map(Number)

  console.log(solution(start, end))

  function solution(start, end) {
    return go(
      L.range(start, end),
      L.map(n =>(n*(n+1))/2),
      reduce((a, b) => (a * b) % 14579),
    )
  }

  process.exit()
})

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// let input = ''
// rl.on('line', line => {
//   input = line
// }).on('close', () => {

//   const [start, end] = input.split(' ').map(Number)

//   console.log(solution(start, end))

//   function solution(start, end) {
//     const arr = Array(end - start + 1).fill().map((_, i) => i + start)
//     let result = arr
//       .map(n => n*(n+1)/2)
//       .reduce((a, b) => (a * b) % 14579)
//     return result 
//   }

//   process.exit()
// })