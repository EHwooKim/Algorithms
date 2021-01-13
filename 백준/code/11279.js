const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const N = +readline()

function solution(N) {
  const heap = new MaxBinaryHeap()
  const result = []

  for (let i = 0; i < N; i++) {
    const elem = readline().trim()
    if (elem === '0') result.push(heap.extract())
    else heap.insert(+elem)
  }
  console.log(result.join('\n'))
}

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const value = this.values[idx]
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      const parentVlaue = this.values[parentIdx]
      if (parentVlaue >= value) break
      this.values[parentIdx] = value
      this.values[idx] = parentVlaue
      idx = parentIdx
    }
  }
  extract() {
    if (this.values.length === 0) return 0
    const result = this.values[0]
    const lastValue = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = lastValue
      this.sinkDown()
    }
    return result
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const value = this.values[0]
    while (true) {
      const leftIdx = 2 * idx + 1
      const rightIdx = 2 * idx + 2
      let leftValue, rightValue
      let swap = null
      if (leftIdx < length) {
        leftValue = this.values[leftIdx]
        if (leftValue > value) {
          swap = leftIdx
        }
      }
      if (rightIdx < length) {
        rightValue = this.values[rightIdx]
        if (
          (swap === null && rightValue > value) ||
          (swap !== null && rightValue > leftValue)
        ) {
          swap = rightIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = value
      idx = swap
    }
  }
}

solution(N)