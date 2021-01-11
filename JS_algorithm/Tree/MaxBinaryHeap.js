class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break
      this.values[parentIdx] = element 
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null // swap 시킬 idx 저장할 변수
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(1)
heap.insert(2)
heap.insert(10)
heap.insert(50)
console.log(heap)
console.log(heap.extractMax())
console.log(heap)