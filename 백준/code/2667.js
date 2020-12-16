const fs = require("fs");

let input = fs
  .readFileSync(process.argv.length > 2 ? "./input/단지번호.txt" : "/dev/stdin")
  .toString()
  .split("\r\n")

let n = input[0]*1
let arr = [];  
for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(''));
}

const checkHome = (arr, i, j, n) => {
    let df = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let res = []
    for (const d of df) {
        let dx = d[0] + i, dy = d[1] + j
        if (0 <= dx &&  dx < n && 0 <= dy && dy < n && arr[dx][dy] === '1') {
            res.push([dx, dy])
        }   
    }
    return res
} 
const changeToZero = (arr, arr2) => {
    arr2.map(point => {
        arr[point[0]][point[1]] = '0'
    })
    return arr
}

const solution = (arr, n) => {
    let answerArr = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === '1') {
                let count = 0
                let bfsArray = [[i, j]]
                arr[i][j] = '0'
                while (bfsArray.length) {
                    count +=1
                    let [x, y] = bfsArray.shift()
                    let checkResult = checkHome(arr, x, y, n)
                    bfsArray = bfsArray.concat(checkResult)
                    arr = changeToZero(arr, checkResult)
                }
                answerArr.push(count)
            }   
        }
    }
    return answerArr.sort((a, b) => a - b)
}
result = solution(arr, n)
console.log(result.length+'')
for (const r of result) console.log(r+'')
