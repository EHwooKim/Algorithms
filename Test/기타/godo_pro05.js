function solution(votes){
  let count = 0
  let myLord = votes[0]
  let otherLords = votes.slice(1).filter(v => v >= myLord).sort((a, b) => a > b)
  const lenOfLords = otherLords.length
  let maxLord = otherLords[lenOfLords - 1] || 0
  
  while (myLord <= maxLord) {
      count += 1
      myLord += 1
      otherLords[lenOfLords - 1] = otherLords[lenOfLords - 1] - 1
      otherLords = otherLords.sort((a, b) => a > b)
      maxLord = otherLords[lenOfLords - 1]
  }
  
  return count;
}