function solution(N, stages) {
  const uncompleteCount = new Array(N + 2).fill(0)
  const reachCount = new Array(N + 2).fill(0)
  for (const stage of stages) {
        uncompleteCount[stage] += 1
        for (let i = 1; i <= stage; i++) {
            reachCount[i] += 1
        }
    }
  const uncompleteRatio = new Array(N + 1).fill(0)
  for (let i = 1; i <= N; i++) {
      uncompleteRatio[i] = (uncompleteCount[i] / reachCount[i])
  }
  
  const player = new Array(N).fill(0).map((_, i) => i + 1)
  player.sort((a, b) => uncompleteRatio[b] - uncompleteRatio[a])
  
  return player
  
}