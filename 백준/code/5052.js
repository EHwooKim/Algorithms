const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {  
    let result = []
    let index = 0

    const t = +input[index++]  

    for (let i = 0; i < t; i++) {
      let consistency = 'YES'
      const n = +input[index++]
      const arr = input.slice(index, index + n)
      index += n

      arr.sort((a, b) => a.length - b.length)

      const tree = new Tree()
      for (const a of arr) {
        if (!tree.insert(a)) {
          consistency = 'NO'
          break
        }
      }
      
      result.push(consistency)
    }

    return result.join('\n')
  }

  process.exit()
})

class Node {
  constructor(value) {
    this.value = value
    this.done = false
    this.children = new Array(10).fill(null)
  }
}

class Tree {
  constructor() {
    this.root = new Array(10).fill(null)
  }

  insert(numberStr) {
    let parent = null

    for (let i = 0; i < numberStr.length; i++) {
      const num = +numberStr[i]
      const newNode = new Node(num)

      if (i === numberStr.length - 1) {
        newNode.done = true
      }

      if (i === 0) {
        if (!this.root[num]) {
          this.root[num] = newNode
        }
        parent = this.root[num]

        continue
      }

      if (parent.done) {
        return false
      }

      if (!parent.children[num]) {
        parent.children[num] = newNode
      }

      parent = parent.children[num]
    }

    return true
  }
}
