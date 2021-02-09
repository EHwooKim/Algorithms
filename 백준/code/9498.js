const input = +require('fs').readFileSync('/dev/stdin').toString()

console.log(solution(input))

function solution(number) {
  let grade = 'F'
  if (number >= 90) grade = 'A'
  else if (number >= 80) grade = 'B'
  else if (number >= 70) grade = 'C'
  else if (number >= 60) grade = 'D'

  return grade
}