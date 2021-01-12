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

  solution(input)

  function solution(arr) {
    
    const tree = {
      A: {}
    }

    for (let i = 1; i < arr.length; i++) {
      const [root, left, right] = arr[i].split(' ')
      tree[root].left = left !== '.' ? left : undefined
      tree[root].right = right !== '.' ? right : undefined
      tree[left] = {}
      tree[right] = {}
    }

    console.log(order(tree, 'A', 'pre'))
    console.log(order(tree, 'A', 'in'))
    console.log(order(tree, 'A', 'post'))

  }
  process.exit()
})

function order(tree, node, type) {
  let result = ''
  
  type === 'pre' && (result += node)
  if (tree[node].left) result += order(tree, tree[node].left, type)
  type === 'in' && (result += node)
  if (tree[node].right) result += order(tree, tree[node].right, type)
  type === 'post' && (result += node)
  return result
}
