const countNumber = (inputArr) => {
    let [tmp, ...arr] = inputArr
    let count = 1
    let countArr = []
    for (const a of arr) {
        if (tmp === a) {
            count += 1
        }
        else {
            countArr.push(count)
            tmp = a
            count = 1
        }
    }
    countArr.push(count)
    return countArr
}

const solution = (inputArr) => {
    let count = 0
    while (!(inputArr.length === 1 && inputArr[0] === 1)) {
        inputArr = countNumber(inputArr)        
        count +=1
    }
    return count
}


console.log(solution([1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]	))