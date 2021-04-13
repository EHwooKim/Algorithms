const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  solution(input)

  function solution(arr) {
    const count = {}
    let totalCount = 0

    arr.forEach(tree => {
      totalCount += 1
      count[tree] = count[tree] === undefined ? 1 : count[tree] + 1
    })

    const treeName = Object.keys(count)
    treeName.sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    })
    
    treeName.forEach(tree => {
      const ratio = new Number(count[tree]/totalCount * 100).toFixed(4)
      console.log(`${tree} ${ratio}`)
    })  
  }


  process.exit()
})