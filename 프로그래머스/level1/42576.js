// function solution(participant, completion) {
//   const participantObject = {}
//   const result = []
//   for (const p of participant) {
//     if (participantObject[p]) {
//       participantObject[p] += 1 
//     } else participantObject[p] = 1
//   } 
//   for (const c of completion) {
//     participantObject[c] -= 1
//   }
//   for (const p of Object.keys(participantObject)) {
//     if (participantObject[p]) result.push(p)
//   }
//   return result[0]
// } 

function solution(participant, completion) {
  const participantObject = {}
  const result = []
  for (const p of participant) {
    participantObject[p] = participantObject[p] === undefined ? 1 : ++participantObject[p]
  } 
  for (const c of completion) {
    participantObject[c] -= 1
  }
  for (const p of Object.keys(participantObject)) {
    if (participantObject[p]) return p
  }
} 

let participant = [
  ["leo", "kiki", "eden"],
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["mislav", "stanko", "mislav", "ana"]
];
let completion = [
  ["eden", "kiki"],
  ["josipa", "filipa", "marina", "nikola"],
  ["stanko", "ana", "mislav"]
];
console.log(solution(participant[0], completion[0]))
console.log(solution(participant[1], completion[1]))
console.log(solution(participant[2], completion[2]))