const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
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
const L = {}
L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a)
})
L.filter = curry(function* (f, iter) {
  for (const a of iter) if (f(a)) yield a
})
const join = curry((sep=',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter))


const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  console.log(solution(input))

  function solution(arr) {
    return go(
      arr,
      L.filter(a => a !== '#'),
      L.map(countAlpha),
      join('\n')
    )
  }

  function countAlpha(str) {
    const target = str[0]
    let count = 0

    for (let i = 1; i < str.length; i++) {
      let currentCharCode = str[i].charCodeAt()
      if (currentCharCode < 97) {
        currentCharCode += 32
      }

      if (target.charCodeAt() === currentCharCode) {
        count += 1
      }
    }
    return `${target} ${count}`
  }

  process.exit()
})


// function solution(arr) {
//   for (const str of arr) {
//     if (str === '#') continue
//     const target = str[0]
//     let count = 0

//     for (let i = 1; i < str.length; i++) {
//       let currentCharCode = str[i].charCodeAt()
//       if (currentCharCode < 97) {
//         currentCharCode += 32
//       }

//       if (target.charCodeAt() === currentCharCode) {
//         count += 1
//       }
//     }
//     console.log(`${target} ${count}`)
//   }
// }