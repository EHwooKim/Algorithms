#	Tree

* 목표
  * `tree` 정의
  * `tree`와 `list`  비교
  * `tree`, `binary tree`, `binary search tree` 의 차이점
  * `binary search tree` 구현
* `Tree란?`
  * `부모 / 자식` 관계의 노드를 가진 자료 구조



![image](https://user-images.githubusercontent.com/52653793/103845237-01058480-50df-11eb-9fcb-03d2ab6e5acf.png)



![image](https://user-images.githubusercontent.com/52653793/103845477-7f622680-50df-11eb-9320-5830cae5f0a4.png)

![image](https://user-images.githubusercontent.com/52653793/103845496-8852f800-50df-11eb-9948-bc92596d48e7.png)

![image](https://user-images.githubusercontent.com/52653793/103845598-b7696980-50df-11eb-87d1-63d43d7f5afc.png)

* `Tree`의 쓰임새

![image](https://user-images.githubusercontent.com/52653793/103846458-7b370880-50e1-11eb-9c71-b53cb6501c03.png)

## Binary Search Tree

### How is works

* 모든 노드는 최대 **두개**의 자식 노드를 가진다.
* 부모 노드보다 `작은 노드는 왼쪽`에, `큰 노드는 오른쪽`에 위치한다

### Method

* Insert(val)

  ```
  - 새로운 노드 인스턴스 생성
  - 만약 root가 없다면 새로운 노드를 root로 지정.
  - root를 시작으로 아래의 과정을 반복한다.
  - root를 현재 노드 변수에 할당하고 새로운 노드의 값을 비교한다.
  - 새로운 노드가 현재 노드보다 작으면 left, 크면 right 노드를 확인한다.
  - 자식 노드가 없다면 해당 위치에 새로운 노드 할당, 있다면 자식노드를 현재노드로 재 할당하여 위 과정 반  복
  ```

  > `BST`에 이미 존재하는 값이면 undefined를 반환하거나 해당 값의 count를 높이는 등의 처리

* find(val)

  ```
  - 만약 root가 없다면 탐색 종료
  - root 노드를 현재 노드로 할당 후 아래 과정 반복
  - 현재 노드가 찾는 값과 같다면 true, found 변수 true 할당 또는 현재 노드 반환등의 처리
  - 찾는 값이 현재 노드보다 작으면 현재 노드의 left를 현재 노드로 할당
  - 찾는 값이 현재 노드보다 크면 현재 노드의 right를 현재 노드로 할당
  - 현재 노드가 null 이 되거나 found 변수가 true가 되면 반복문을 종료하고,
    true 또는 찾은 노드를 반환
  ```

### BST 코드

[Binary Search Tree](./BinarySearchTree.js)