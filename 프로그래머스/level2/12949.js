function solution(arr1, arr2) {
    let answer = arr1.map(v => {
        let tmpArr = []
        for (let j = 0; j < arr2[0].length; j++) {
            let tmpNum = 0
            for (let i = 0; i < v.length; i++) {
                tmpNum += arr2[i][j] * v[i]
            }
            tmpArr.push(tmpNum)
        }
        return tmpArr
    })
    return answer
}
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]))