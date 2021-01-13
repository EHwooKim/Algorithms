const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const N = +readline().trim()

function solution(N) {
  const heap = new MinBinaryHeap()
  const result = []
  for (let i = 0; i < N; i++) {
    const value = readline().trim()
    if (value === '0') {
      result.push(heap.extract())
    }
    else heap.insert(+value)
  }
  console.log(result.join('\n'))
}

class MinBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(value) {
    this.values.push(value)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      const parentElem = this.values[parentIdx]
      if (parentElem <= element) break
      this.values[parentIdx] = element
      this.values[idx] = parentElem
      idx = parentIdx
    }
  }
  extract() {
    if (this.values.length === 0) return 0
    const result = this.values[0]
    const lastElem = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = lastElem
      this.sinkDown()
    }
    return result
  }
  sinkDown() {
    let idx = 0
    const element = this.values[0]
    const length = this.values.length
    while (true) {
      const leftIdx = 2 * idx + 1
      const rightIdx = 2 * idx + 2
      let leftElem, rightElem
      let swap = null
      if (leftIdx < length) {
        leftElem = this.values[leftIdx]
        if (leftElem < element) {
          swap = leftIdx
        }
      }
      if (rightIdx < length) {
        rightElem = this.values[rightIdx]
        if (
          (!swap && rightElem < element) ||
          (swap && rightElem < leftElem)
        ) {
          swap = rightIdx
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

solution(N)