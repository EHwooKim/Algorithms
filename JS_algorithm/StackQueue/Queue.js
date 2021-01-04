class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/*
  # Queue
  - 선입선출 구조
*/

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) { // 값 추가 
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  dequeue() { // 값 제거
    if (!this.first) return null
    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.val
  }
}
  
/*
  ## Time Complexity
  - Insertion: O(1)
  - Removal: O(1)
  - Searching: O(N)
  - Access: O(N)
*/