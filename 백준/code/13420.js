const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const curry = f =>
  (a, ..._) => _.length ? f(a) : (..._) => f(a, ..._)
const map = curry((f, iter) => {
  const res = []
  for (const a of iter) {
    res.push(f(a))
  }
  return res
})
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for (const a of iter) {
    acc = f(acc, a)  
  }
  return acc
}
const go = (...args) => reduce((a, f) => f(a), args)
const join = curry((sep=' ', iter) => reduce((a, b) => `${a}${sep}${b}`, iter))

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    return go(
      arr,
      map(clacCheck),
      map(print),
      join('\n')
    )
  }

  function clacCheck(str) {
    const [num1, oper, num2, equal, answer] = str.split(' ')
    const result = calc(BigInt(num1), oper, BigInt(num2))
    if (result === BigInt(answer)) {
      return true
    }
    return false
  }

  function calc(num1, oper, num2) {
    switch (oper) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return num1 / num2
    }
  }

  function print(check) {
    return check ? 'correct' : 'wrong answer'
  }

  process.exit()
})