const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const L = {}
L.map = curry(function *(f, iter) {
  for (const a of iter) yield f(a)
})
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
const join = curry((sep="", iter) => 
  reduce((a, b) => `${a}${sep}${b}`, iter))
const go = (...args) => reduce((a, f) => f(a), args)

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {

  const [num1, num2] = input

  console.log(solution(num1, num2))

  function solution(num1, num2) {
    
    return go(
      getOne(num2),
      L.map(n => n * num1),
      join('\n')
    )
    
  }

  function *getOne(num) {
    let tmp = num
    while (true) {
      const [moc, na] = [Math.floor(tmp / 10), tmp % 10]
      tmp = moc
      yield na
      if (moc === 0) {
        yield num
        return
      }
    }
  }

  process.exit()
})