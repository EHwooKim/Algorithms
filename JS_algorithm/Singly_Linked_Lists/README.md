# Singly Linked Lists

## Intro

![image](https://user-images.githubusercontent.com/52653793/103198319-601f0880-492b-11eb-8fbe-bcd59e014fee.png)

`head`, `tail`, `length` 프로퍼티를 가지고 있는 자료구조로

`node`로 구성되어 있으며 각 `node`들은 `value`와 `pointer(next)`를 가지고있다.

![image](https://user-images.githubusercontent.com/52653793/103198692-47632280-492c-11eb-9026-7ef7114dee43.png)

> LikedLists는 인덱스가 없다! 인덱스를 통해 뭔가 직접 조작할 생각을 하지 말자.

![image](https://user-images.githubusercontent.com/52653793/103205519-13dcc400-493d-11eb-8c74-3970e44d48c1.png)

## Structure

```javascript
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
```

> Linked List를 구현할 떄 사용하는 Node

```javascript
class SinglyLinkedList {
  constructor() { 
    this.head = null
    this.tail = null
    this.length = 0
  }
  ...
}
```

> head, tail, length 값만 가지고 있다.

## Methods

* push(val)

  * List 끝에 값을 추가하는 메서드

  ```text
  - List에 담을 값을 인자로 받아 Node를 만든다
  - 만약 head 가 비어이다면 head와 tail을 새로운 Node값으로 지정한다.
  - head에 값이 들어있는 상태면 현재 tail 노드의 next 값과 tail 노드를 새로운 Node로 바꾼다.
  - length를 증가시킨다.
  ```

* pop()

  * List 마지막 값을 제거하는 메서드

  ```text
  - List에 Node가 없으면 undefined 반환
  - next를 통해 다음 값으로의 접근만 가능할뿐 이전 값으로 접근이 안되기 때문에
    head를 시작으로 tail까지 next를 반복한다.
  - 현재 tail 이전 값의 List의 tail로 할당하고, next 값을 null로 할당한다
  - length를 감소시킨다.
  - length가 0이 되면 head, tail을 null로 할당한다
  - 제거된 값을 반환한다.
  ```

* shift()

  * List 시작 값을 제거하는 메서드  

  ```text
  - List에 Node가 없으면 undefined 반환
  - 현재 head값을 변수에 할당한다.
  - 현재 head의 next 값을 List의 head 값으로 할당한다.
  - length를 감소시킨다.
  - length가 0이 되먄 tail에 null 할당
  - 제거된 값을 반환한다.
  ```

* unshift(val)

  * List 시작 지점에 값을 추가하는 메서드

  ```text
  - List에 담을 값을 인자로 받아 Node를 만든다
  - 만약 head가 비어있다면 head와 tail을 새로운 Node값으로 지정한다.
  - 그렇지 않다면 새로운 Node를 head로, next를 기존 head 값으로 할당한다.
  - length를 증가시킨다.
  ```

* get(index)

  * index 포지션에 해당하는 값을 반환하는 메서드

  ```text
  - index를 인자로 받는다
    (하지만 Liked List는 인덱스 접근이 불가능하기에 앞에서부터 찾아나가야 한다.)
  - 잘못된 index 값을 받으면 null을 반환한다
  - 원하는 index가 될 때까지 반복문을 돌려 값을 반환한다.
  ```

* set(index, val)

  * index 포지션에 해당하는 값을 바꾸는 메서드

  ```text
  - index와 val을 인자로 받는다.
  - get 메서드를 활용하여 원하는 포지션의 Node를 찾는다
  - Node가 존재하면 해당 Node의 값을 변경하고 true를 반환, Node가 없으면 false를 반환한다.
  ```

* Insert(index, val)

  * index 포지션에 해당하는 위치에 Node를 추가하는 메서드

  ```text
  - index와 val을 인자로 받는다.
  - 잘못된 index 값을 받으면 false를 반환 (0보다 작거나 length보다 크거나)
  - index가 0이면 unshift를 시랭
  - 그렇지 않으면 get 메서드를 통해 index - 1 Node에 접근한다. 
    index-1 Node와 new Node의 next를 적절히 할당한다.
  - length 증가
  - true 반환
  ```

* remove(index)

  * index 포지션에 해당하는 Node를 제거하는 메서드

  ```text
  - 잘못된 index 값을 받으면 undefined 반환 (0보다 작거나 length보다 크거나)
  - length === length-1 => pop 실행
  - length === 0  => shift 실행
  - 그 외에는 get 메서드로 index-1 Node를 찾고
    index-1 Node의 next를 next.next로 바꿔준다.
  - length 감소
  - 삭제한 값 반환
  ```

* reverse()

  * List의 순서를 반대로 한다. (뒤집는다)

  ```text
  - node 변수를 만들고 head 값으로 초기화 한다.
  - head와 tail을 바꾼다
  - next, prev 변수를 만든다. (null 초기화)
  - next 변수에 node.next를 미리 저장해두고, node.next를 prev로 할당하여 순서를 바꾼다
  - prev를 node로, node를 next로 재할당한다.
  - 위 과정을 length만큼반복한다.
  ```

## Singly Linked List 코드

[Singly Linked List](./SinglyLinkedList.js)

## BigO

| Task      | BigO         |                                                              |
| --------- | ------------ | ------------------------------------------------------------ |
| Insertion | O(1)         | 삽입은 O(1)이지만, Searching할 때 O(N)의 시간이 걸리긴 한다. |
| Removal   | O(1) or O(N) |                                                              |
| Searching | O(N)         | index접근이 아닌 head부터  순차적 접근을 해야하므로          |
| Access    | O(N)         | index접근이 아닌 head부터  순차적 접근을 해야하므로          |










