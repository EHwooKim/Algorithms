
const numToArr = (num) => {
    let tmp = []
    for (const n of num + '') {
        tmp.push(n)
    }
    return tmp.sort().join('')
    
}

const arr = [112, 1814, 121, 1481, 1184]
let a = arr.map(a => numToArr(a))
console.log(a)

const s = new Set(a)

console.log(s.size)