function solution(bridgeLength, weight, truckWeights) {
  let truckOnBridge = []
  let bridgeWeight = 0
  let answer = 0

  while (true) {
    if (truckOnBridge.length) {
      if (truckOnBridge[0][0] >= bridgeLength) {
        bridgeWeight -= truckOnBridge.shift()[1]
      }
    }

    if (bridgeWeight + truckWeights[0] <= weight) {
      let truck = truckWeights.shift()
      bridgeWeight += truck
      truckOnBridge.push([0, truck])
    }
    if (!truckWeights.length) {
      return answer + bridgeLength + 1
    }

    truckOnBridge = truckOnBridge.map(t => [t[0] + 1, t[1]])
    answer++
  }
}

console.log(solution(2, 10, [7, 4, 5, 6]))
