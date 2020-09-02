function solution(n, vertex	) {
  let nodes = Array(n + 1).fill().map(() => Array())
  let distance = Array(n + 1).fill(-1)
  distance[1] = 0
  vertex.forEach(v => {
    let [n, m] = v
    nodes[n].push(m)
    nodes[m].push(n)
  })
  q = [1]
  while (q.length) {
    n = q.shift()
    nodes[n].forEach(v => {
      if (distance[v] === -1) {
        q.push(v)
        distance[v] = distance[n] + 1
      }
    })
  }
  MAX = Math.max(...distance)
  return distance.filter(v => v === MAX).length
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	))