class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    const currentTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = currentTail.prev
      this.tail.next = null
      currentTail.prev = null
    }
    this.length--
    return currentTail
  }
  shift() {
    if (!this.head) return undefined
    const currentHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = currentHead.next
      this.head.prev = null
      currentHead.next = null
    }
    this.length--
    return currentHead
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter
    let current

    if (index <= this.length/2) {
      counter = 0
      current = this.head
      while (index !== counter) {
        current = current.next
        counter++
      }
    } else {
      counter = this.length - 1
      current = this.tail
      while (index !== counter) {
        current = current.prev
        counter--
      }
    }
    return current
  }
  set(index, val) {
    if (index < 0 || index >= this.length) return false
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    const newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    
    const removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.prev = null
    removedNode.next = null
    this.lnegth--
    return removedNode
  }
}
