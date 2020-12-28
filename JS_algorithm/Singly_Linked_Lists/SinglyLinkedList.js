/*
  # Node (Linked List를 구성하는 Node를 정의)
  - piece of data - val
  - reference to next node - next
*/
class Node {
  constructor(val) {
    this.val = val
    this.next = null // 기본값 null
  }
}

// Node 인스턴스를 만들고 next 프로프터에 연결시켜준다
// const first = new Node('hi')
// first.next = new Node('there')
// first.next.next = new Node('that')

// console.log(first)
// console.log(first.next)
// console.log(first.next.next)
// 위 방법처럼 next를 통해 다음 값에 접근하는 방식으로 List를 구현할 것이다.

/*
  # SinglyLinkedList
*/

class SinglyLinkedList {
  constructor() {  // head, tail, legnth만을 가지고있다
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  push(val) { 
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode // 현재 tail의 next로 새로운 Node를 할당
      this.tail = newNode // tail을 새로운 Node로 변경
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current.val
  }
  shift() {
    if (!this.head) return undefined
    const currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null 
    }
    return currentHead.val
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else { // else 처리를 하지 않으면 비어있는 List에 unshift시 newNode의 next에 newNode가 무한참조가 이루어진다..
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index >= this.length || index < 0) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    } 
    return current
  }
  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) { // 또는 return !! this.push(val)
      this.push(val)
      return true
    }
    if (index === 0) return !!this.unshift(val)

    const newNode = new Node(val)
    let prev = this.get(index - 1)
    newNode.next = prev.next
    prev.next = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    
    let prevNode = this.get(index - 1)
    const removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return removed.val
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node // head <-> tail
    let next = null
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

const list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")
list.push("nice")
list.insert(1, 'what??')
list.print()
console.log(list.reverse().print())
