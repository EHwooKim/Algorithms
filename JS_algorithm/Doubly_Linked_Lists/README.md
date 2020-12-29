# Doubly Linked Lists

## Intro

![image](https://user-images.githubusercontent.com/52653793/103282701-f03b7b80-4a19-11eb-904f-3c2ccc1fe59e.png)

`SIngly Linked Lists`와 비슷하지만, 각 `Node`가 `next`뿐만 아니라 `prev`값도 가지고 있어 양방향 접근이 가능한 자료구조.

![image](https://user-images.githubusercontent.com/52653793/103282865-60e29800-4a1a-11eb-9597-b23e516b4ce5.png)

![image-20201229221259732](../../../AppData/Roaming/Typora/typora-user-images/image-20201229221259732.png)

## Structure

```javascript
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
```

> Linked List를 구현할 떄 사용하는 Node, Sinly와 다르게 prev 값도 있다.

```javascript
class DoublyLinkedList {
  constructor() { 
    this.head = null
    this.tail = null
    this.length = 0
  }
  ...
}
```

> Singly와 동일하게 head, tail, length 값을 가지고 있다.

## Methods

> Singly Linked List의 메서드와 다른 점만 서술

* push(val)

  ```text
  - head에 값이 들어있는 상태면 현재 tail의 next를 새로운 Node로 바꾼다.
  - 새로운 Node의 prev를 현재 tail로 할당
  - tail에 새로운 Node 할당
  ```

* pop()

  ```text
  - 현재 tail을 변수에 저장
  - length === 1, head와 tail을 null로 할당
  - 현재 tail의 prev 값을 tail에 할당
  - 새로운 tail의 next에 null 할당
  ```

* shift()

  ```text
  - 현재 head를 변수에 저장
  - length === 1, head와 tail을 null로 할당
  - 현재 head의 next 값을 head에 할당
  - 새로운 head의 prev에 null 할당
  - 변수에 저장한, 예전 head의 next에 null 할당
  ```

* unshift()

  ```text
  - 현재 head의 prev에 새로운 Node 할당
  - 새로운 Node의 next에 현재 head 할당
  - head에 새로운 Node 할당
  ```

* get(index)

  ```text
  - index가 length/2 보다 작거나 같으면 head에서부터, index가 length/2 보다 크면 tail에서부터
    원하는 index까지 반복 탐색하여 값을 찾는다.
  ```

* set(index, val)

  ```text
  - get을 통해 값읓 찾고 val 변경 (singly와 동일)
  ```

* insert(index, val)

  ```text
  - get을 통해 index-1 Node를 찾아서 적절히 prev, next 할당
  ```

* remove(index)

  ```text
  - get을 통해 index-1 Node를 찾아서 적절히 prev, next 할당
  - 제거된 Node의 prev, next에 null 할당 후 반환
  ```

## Doubly Linked List 코드

[Doubly Linked List](./DoublyLinkedList.js)

## BigO

| Task      | BigO |                                     |
| --------- | ---- | ----------------------------------- |
| Insertion | O(1) |                                     |
| Removal   | O(1) |                                     |
| Searching | O(N) | 기술적으로는 O(N/2)이지만 결국 O(N) |
| Access    | O(N) | 기술적으로는 O(N/2)이지만 결국 O(N) |





