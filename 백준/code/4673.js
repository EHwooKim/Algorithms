const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('close', () => {

  solution(10000)

  function solution(N) {
    const result = Array(N + 1).fill(1)

    for (let i = 1; i < N + 1; i++) {
      let tmp = i
      while (true) {
        const newNumber = makeNumber(tmp)
        if (newNumber > N) break
        result[newNumber] = 0
        tmp = newNumber
      }
    }

    result.forEach((number, index) => {
      if (!index || !number) {
        return
      }
      console.log(index)
    })
  }

  function makeNumber(n) {
    let result = n;
    [...String(n)].forEach(m => result += +m)
    return result
  }

  process.exit()
})

