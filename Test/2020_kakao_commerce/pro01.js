function solution(n, record) {
  const serverArr = Array.from({length: n + 1}, () => [])
  
  record.forEach(input => {
    const [server, nickname] = input.split(' ')
    const targetServer = serverArr[+server]

    if (targetServer.includes(nickname)) return

    if (targetServer.length === 5) {
      targetServer.shift()
    }
    targetServer.push(nickname)
  })


  const result = serverArr.reduce((acc, cur) => acc.concat(cur), [])

  return result
}

solution(1, 	["1 fracta", "1 sina","1 hana","1 robel","1 abc", "1 sina", "1 lynn"])
console.log(solution(4, ["1 a","1 b","1 abc","3 b","3 a","1 abcd","1 abc","1 aaa","1 a","1 z","1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]))