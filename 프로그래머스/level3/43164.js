function findMinValue(depth, arr, tmpArr, minArr, used) {
  if (depth === arr.length) {
    if (minArr.length === 0) {
      return tmpArr
    } else {
      for (let i = 0; i < tmpArr.length; i++) {
        if (minArr[i] < tmpArr[i]) {
          return minArr
        } else if (minArr[i] > tmpArr[i]) {
          return tmpArr
        }
      }
      return tmpArr
    }
  }

  for (let i = 0; i < arr.length ; i++) {
    if (used & (1 << i)) continue
    if (depth === 0 && arr[i][0] ==="ICN") {
      minArr = findMinValue(depth + 1, arr, arr[i], minArr, used | (1 << i))
    } 
    if (tmpArr[tmpArr.length - 1] === arr[i][0]) {
      minArr = findMinValue(depth + 1, arr, [...tmpArr, arr[i][1]], minArr, used | 1 << i)
    }
  }
  return minArr
}

function solution(tickets) {
  const result = findMinValue(0, tickets, [], [], 0)
  return result
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]))
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))

