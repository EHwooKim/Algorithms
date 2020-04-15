let answer = 0

const calc = function(k, numbers, target, tmp) {
    if (k == numbers.length) {
        if (tmp === target) {
            console.log('hi')
            answer += 1
            return
        } else return
    }
    calc(k + 1, numbers, target, tmp + numbers[k])
    calc(k + 1, numbers, target, tmp - numbers[k])
}

const solution = (numbers, target) => {
    calc(0, numbers, target, 0)
    return answer
}

console.log(solution([1, 1, 1, 1, 1], 3))