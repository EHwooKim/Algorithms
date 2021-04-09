const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []

rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  let [N, ...scores] = input
  scores = scores.map(n => n.split(' ').map(Number))

  solution(+N, scores)

  function solution(N, scores) {
    for (let i = 0; i < N; i++) {
      const round = scores.slice(9 * i, 9 * (i+1) + 1)
      const winner = whoIsWinner(round)
      console.log(winner)
    }
  }

  function whoIsWinner(scores) {
    let Yonsei = 0
    let Korea = 0

    scores.forEach(([y, k]) => {
      Yonsei += y
      Korea += k
    })
    const result = Yonsei > Korea 
      ? 'Yonsei' 
      : (Korea > Yonsei ? 'Korea' : 'Draw')

    return result
  }

  process.exit()
})
