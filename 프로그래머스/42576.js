function solution(participant, completion) {
  const participantObject = {}
  const result = []
  for (const p of participant) {
    if (participantObject[p]) {
      participantObject[p] += 1 
    } else participantObject[p] = 1
  } 
  for (const c of completion) {
    participantObject[c] -= 1
  }
  for (const p of Object.keys(participantObject)) {
    if (participantObject[p]) result.push(p)
  }
  return result[0]
} 