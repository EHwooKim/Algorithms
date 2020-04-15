// const range = n => {
//     i = -1
//     res = []
//     while(++i < n) res.push(i)
//     return res
// }

// function solution(n, computers) {
//     let answer = 0;
//     let arr = []
//     let visited = new Array()
//     for (const i in range(n)) visited[i] = true // 이거 더 간단하게..?

//     for (const i in range(n)) {
//         arr.push([])
//         for (const j in range(n)) {
//             if (i !== j && computers[i][j]) arr[i].push(j)
//         }
//     }

//     for (const i in range(n)) {
//         if (visited[i]) {
//             answer += 1
//             visited[i] = false
//             network = arr[i]
//             while (network.length) {
//                 a = network.shift()
//                 if (visited[a]) {
//                     visited[a] = false
//                     network = network.concat(arr[a])
//                 }
//             }
//         }
//     }
//     return answer;
// }
// console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
// console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))


