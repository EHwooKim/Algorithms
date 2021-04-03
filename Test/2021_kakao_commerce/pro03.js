function solution(n, passenger, train) {
  const stationInfo = Array.from({ length: n + 1 }, () => [])
  const visited = new Array(n + 1).fill(false)
  train.forEach(([n, m]) => {
    stationInfo[n].push(m)
    stationInfo[m].push(n)
  })

  const bfs = [
    {
      passengerCount: passenger[0],
      lastStation: 1
    }
  ]
  visited[1] = true

  let result = [0, 0]

  while(bfs.length) {
    const data = bfs.shift()
    let lastStation = true

    const nextStations = stationInfo[data.lastStation]
    nextStations.forEach(station => {
      if (visited[station]) return
      const nextData = {
        passengerCount: data.passengerCount + passenger[station - 1],
        lastStation: station
      }
      bfs.push(nextData)

      visited[station] = true
      lastStation = false
    })

    if (lastStation && (data.passengerCount >= result[1])) {
      const station = data.passengerCount > result[1]
        ? data.lastStation
        : Math.max(data.lastStation, result[0])
      result = [station, data.passengerCount]
    }
  }

  return result
}

console.log(solution(6, [1,1,1,1,1,1]	,[[1,2],[1,3],[1,4],[3,5],[3,6]]))