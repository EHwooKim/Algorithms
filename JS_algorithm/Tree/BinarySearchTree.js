class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } 
    // if 에서 return처리가 되어있으니 굳이 else를 안써줘도 문제가 없겠지
    let current = this.root
    while (true) {
      // 값이 같을 때는 false undefined 등을 반환하거나 해당 값의 카운트를 높이는 방법을 쓰는 등 방법은 다양하다
      if (value === current.value) return undefined 
      if (value < current.value) {
        if (current.left === null ) {
          current.left = newNode
          return this
        } 
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  // find, contains 메서드 들은 구현하기 나름, 값을 찾아 반환 또는 존재 여부 반환 등...
  find(value) {
    if (this.root === null) return undefined
    let current = this.root
    let found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if(!found) return undefined
    return current
  }
  // contains(value) {
  //   if (this.root === null) return false
  //   let current = this.root
  //   let found = false
  //   while (current && !found) {
  //     if (value < current.value) {
  //       current = current.left
  //     } else if (value > current.value) {
  //       current = current.right
  //     } else {
  //       return true
  //     }
  //   }
  //   return false
  // }
}

/*
  ## Time Complexity
  - Insertion: O(log N)
  - Searching: O(log N)
  - 항상 위의 시간 복잡도를 가지는 것은 아니다
    이전 값보다 큰값을 계속 넣게되는 등의 경우 BST는 효율적이지 못하다
*/