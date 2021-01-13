const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const N = +input[0]
  const tree = Array.from({ length: N + 1 }, () => [])
  const parents = new Array(N + 1).fill(-1)
  parents[1] = 0
  
  for (let i = 1; i < N; i++) {
    const [n, m] = input[i].split(' ').map(a => +a)
    tree[n].push(m)
    tree[m].push(n)
  }
  
  for (let i = 1; i <= N; i++) {
    dfs(i)
  }
  console.log(parents.slice(2).join('\n'))
  
  function dfs(start) {
    const stack = [start]
    while (stack.length) {
      const parent = stack.pop()
      for (const child of tree[parent]) {
        if (parents[child] === -1) {
          parents[child] = parent
          stack.push(child)
        }
      }
    }

  }

  process.exit()
})
