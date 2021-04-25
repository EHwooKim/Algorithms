const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(' '))
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    const result = arr.map(format)

    return result.join('\n')
  }

  function format(arr) {
    const [str1, str2] = arr
    return `${str1} & ${str2} are ${isAnagram(str1, str2) ? '': 'NOT '}anagrams.`
  }

  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    const counter = {
      count: {},
      increase(s) {
        this.count[s] = this.count[s] ? this.count[s] + 1 : 1
      },
      decrease(s) {
        this.count[s] = this.count[s] ? this.count[s] - 1 : -1
      }
    }

    for (let i = 0; i < str1.length; i++) {
      counter.increase(str1[i])
      counter.decrease(str2[i])
    }

    return Object.values(counter.count).every(n => n === 0)
  }

  process.exit()
})

