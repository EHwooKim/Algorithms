const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const reduce = curry((f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
})

const filter = curry((f, iter) => {
  const res = []
  for (const a of iter) {
    if (f(a)) res.push(a)
  }
  return res
})

const go = (...args) => reduce((a, f) => f(a), args)


const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  const [[N, K], numbers] = input.map(n => n.split(' ').map(Number))

  console.log(solution(numbers, K))

  function solution(arr, k) {

    const result = go(
      arr,
      filter(a => a < K),
      reduce((a, b) => `${a} ${b}`)
    )

    return result
  }

  process.exit()
})