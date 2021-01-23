function solution(next_student) {
  const studentCount = next_student.length
  const passedCount = new Array(studentCount + 1).fill(0)

  for (let i = 0; i < studentCount; i++) {
    const visited = new Array(studentCount + 1).fill(false)
    const startStudent = i + 1
    passedCount[startStudent] += 1
    visited[startStudent] = true

    let currentStudent = startStudent - 1
    let nextStudent = next_student[currentStudent]
    
    while (nextStudent !== 0 && !visited[nextStudent]) {
      visited[nextStudent] = true
      currentStudent = nextStudent - 1
      nextStudent = next_student[currentStudent]
      passedCount[startStudent] += 1
    }
  }

  let maxStudent = 0
  let maxCount = 0

  passedCount.forEach((count, index) => {
    if (count >= maxCount) {
      maxStudent = index
      maxCount = count
    }
  })
  
  return maxStudent
}

console.log(solution([5, 9, 13, 1, 0, 0, 11, 1, 7, 12, 9, 9, 2]))
console.log(solution([6, 10, 8, 5, 8, 10, 5, 1, 6, 7]))


// const passRelation = Array.from({length: studentCount + 1}, () => [])

// next_student.forEach((next, student) => {
//   passRelation[student + 1].push(next)
// })