function solution(votes, k) {
  const voteCount = {}
  for (vote of votes) {
    voteCount[vote]  = voteCount[vote] ? voteCount[vote] + 1 : 1
  }

  const voteCountArr = []
  for (let key in voteCount) {
    voteCountArr.push({ name: key, vote: voteCount[key] })
  } 

  voteCountArr.sort((a, b) => {
    if (a.vote > b.vote) return -1;
    if (a.vote < b.vote) return 1;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  })

  let voteLimit = 0
  for (let i = 0; i < k; i++) {
    voteLimit += voteCountArr[i].vote
  }

  let i = voteCountArr.length - 1
  let accVote = 0
  let resultCarName = ''
  
  while (accVote + voteCountArr[i].vote < voteLimit) {
    resultCarName = voteCountArr[i].name
    accVote += voteCountArr[i].vote
    i -= 1
  }

  return resultCarName
}

console.log(solution(["AVANT", "PRIDO", "SONATE", "RAIN", "MONSTER", "GRAND", "SONATE", "AVANT", "SONATE", "RAIN", "MONSTER", "GRAND", "SONATE", "SOULFUL", "AVANT", "SANTA"], 2))
console.log(solution(["AAD", "AAA", "AAC", "AAB"]	, 4))