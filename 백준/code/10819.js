

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  let [N, arr] = input
  arr = arr.split(' ').map(Number)

  console.log(solution(+N, arr))

  function solution(N, arr) {
    let result = 0
    const order = []
  
    inner(0)
  
    function inner(used) {
  
      if (order.length === N) {
        result = Math.max(something(arr, order), result)
        return
      }
  
      for (let i = 0; i < N; i++) {
        if (used & (1 << i)) continue
  
        order.push(i)
        inner(used | (1<<i))
        order.pop()
      }
    }

    return result
  }
  
  function something(arr, order) {
    let result = 0
    for (let i = 0; i < arr.length - 1; i++) {
      const a = order[i]
      const b = order[i+1]
      result += Math.abs(arr[a] - arr[b])
    }
    return result
  }

  process.exit()
})