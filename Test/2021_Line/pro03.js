function solution(enter, leave) {
  const peopleCount = enter.length
  const facedPeople = Array.from({length: peopleCount + 1}, () => new Set())

  for (let i = 1; i < peopleCount + 1; i++) {
    const enteredIndex = enter.findIndex(n => n === i)
    const leavedBefore = leave.slice(0, leave.findIndex(n => n === i))

    for (let j = enteredIndex + 1; j < peopleCount; j++) {
      const person = enter[j]
      if (leavedBefore.includes(person)) {
        facedPeople[i].add(person)
        facedPeople[person].add(i)

        for (let index = enteredIndex + 1; index < enter.findIndex(n => n === person); index++) {
          facedPeople[i].add(enter[index])
          facedPeople[enter[index]].add(i)
        }

      }
    }
  }
  const [, ...result] = facedPeople
  return result.map(n => n.size)
}

solution([1,3,2], [1,2,3]) //[0,1,1]
console.log(solution([1,4,2,3],	[2,1,4,3])) //[0,1,1]