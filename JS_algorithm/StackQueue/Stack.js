class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/*
  # Stack
  - push, pop 메서드만 가지고있다
  - pop의 경우 Singly Linked List의 pop과 같이 작성하면 시간복잡도가 O(N)이라 비효율적이기에
    shift, unshift와 같이 pop, push를 구현하는 것이 좋다
  - 그냥 Array 쓰면되긴 하지만 그래도 구현해보자.
*/

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop() {
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