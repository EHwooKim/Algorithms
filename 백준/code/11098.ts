const readline: () => string = (() => {
  // const input = Deno.readTextFileSync('./dev/index.txt').toString().split('\n')
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  let index = 0
  return () => input[index++].trim()
})()

const N: number = +readline()

console.log(solution(N))

function solution(N: number): string {
  let result:string[] = []
  for (let i = 0; i < N; i++) {
    const p = +readline()
    let maxPrice = 0
    let maxPricePlayer = ''

    for (let j = 0; j < p; j++) {
      let [priceStr, player] = readline().split(' ')
      const price = +priceStr
      if (price > maxPrice) {
        maxPrice = price
        maxPricePlayer= player
      }
    }
    result.push(maxPricePlayer)
  }
  return result.join('\n')
}