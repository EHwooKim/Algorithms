const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.trim())
}).on('close', () => {
  const [N, ...arr] = input

  console.log(solution(+N, arr))

  function solution(N, arr) {
    const enter = arr.slice(0, N)
    const out = arr.slice(N)
    
    const tunnelInfo = {}
    enter.forEach((car, index) => {
      tunnelInfo[car] = {
        order: index,
        leave: false
      }
    })
    
    let count = 0
    out.forEach((car, index) => {
      tunnelInfo[car].leave = true

      if (tunnelInfo[car].order !== index) {
        count += 1

        for (const o of enter) {
          if (tunnelInfo[o].leave) continue
          tunnelInfo[o].order = ++index
        }
      }
    })

    return count
  }

  process.exit()
})


