# Graph

![image](https://user-images.githubusercontent.com/52653793/105454665-9602a300-5cc5-11eb-9c8f-30a028745c4f.png)



![image](https://user-images.githubusercontent.com/52653793/105456564-b7b15980-5cc8-11eb-9da2-4c66403828fd.png)

![image](https://user-images.githubusercontent.com/52653793/105457300-ebd94a00-5cc9-11eb-9526-ab7bd87bfedc.png)

* 인접 행렬을 활용한 그래프

![image](https://user-images.githubusercontent.com/52653793/105462041-6d80a600-5cd1-11eb-9a91-952a623e34a3.png)

* 인접  리스트를 활용한 그래프

![image](https://user-images.githubusercontent.com/52653793/105462115-85f0c080-5cd1-11eb-8214-b8e4507ffe39.png)

* 객체(hash table)를 활용한 그래프 

![image-20210122164814157](../../../AppData/Roaming/Typora/typora-user-images/image-20210122164814157.png)

![image](https://user-images.githubusercontent.com/52653793/105462420-f26bbf80-5cd1-11eb-8b10-dcd9cb973832.png)

![image](https://user-images.githubusercontent.com/52653793/105462472-04e5f900-5cd2-11eb-9bab-3499a8a156b9.png)

* 주로 List를 활용한 그래프를 사용할 것이다.

### 그래프 구현 

* 기본

  ```javascript
  class Graph {
    constructor() {
      this.adjacencyList = {}
    }
  }
  ```

* addVertex(vertex)

![image](https://user-images.githubusercontent.com/52653793/105463351-47f49c00-5cd3-11eb-9535-857b3744237e.png)

* addEdge(v1, v2)

![image](https://user-images.githubusercontent.com/52653793/105463822-f6004600-5cd3-11eb-98e4-2f357530569c.png)

* removeEdge(v1, v2)

![image-20210122170942383](../../../AppData/Roaming/Typora/typora-user-images/image-20210122170942383.png)

* removeVertex(vertex)