function solution(weights, head2head) {
  const boxerCount = weight.length

  const boxer = Array.from(
    { length: boxerCount },
    (_, i) => ({ id: i + 1, weight: weights[i] })
  )

  for (let i = 0; i < boxerCount; i++) {
    const gameInfo = head2head[i]

    let gameCount = 0
    let winCount = 0
    let heavyCount = 0

    for (let j = 0; j < boxerCount; j++) {
      const gameResult = gameInfo[j]
      if (gameResult === 'W') {
        if (weights[i] < weights[j]) {
          heavyCount += 1
        }
        gameCount += 1
        winCount += 1
      } else if (gameResult === 'L') {
        gameCount += 1
      }
    }
    
    const odds = gameCount ? winCount / gameCount : 0

    boxer[i] = {
      ...boxer[i],
      heavyCount,
      odds
    }
  }

  boxer.sort((a, b) => {
    if (a.odds > b.odds) return -1
    if (a.odds < b.odds) return 1
    
    if (a.heavyCount > b.heavyCount) return -1
    if (a.heavyCount < b.heavyCount) return 1

    if (a.weight > b.weight) return -1
    if (a.weight < b.weight) return 1

    if (a.id > b.id) return 1
    if (a.id < b.id) return -1
  })

  return boxer.map(b => b.id)
}