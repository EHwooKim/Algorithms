const readline = (() => {
  // const input = Deno.readTextFileSync('./dev/index.txt').toString().split('\n')
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  let index = 0
  return () => input[index++].trim()
})()

const N:number = +readline()

console.log(solution(N))

function solution(N: number): string {
  const arr: string[] = []
  for (let i = 0; i < N; i++) {
    arr.push(readline())
  }

  const result: string[] = arr.map(s => {
    const splittedStr = s.split(' ')
    splittedStr.splice(0, 1, 'god')
    return splittedStr.join('')
  })

  return result.join('\n')
}
