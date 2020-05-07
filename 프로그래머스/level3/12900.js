function solution(n) {
    let i = 3
    let tmp1 = 1, tmp2 =  2, tmp3 = 0
    while (i++ <= n) {
        tmp3 = (tmp1 + tmp2) % 1000000007
        tmp1 = tmp2, tmp2 = tmp3
    }
    return tmp2
}
console.log(solution(4))
