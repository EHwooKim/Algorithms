const input = +require('fs').readFileSync('/dev/stdin').toString()

console.log(solution(input))

function solution(number) {
  let grade = 'F'
  if (number >= 90 & number <= 100) grade = 'A'
  else if (number >= 80 & number <= 89) grade = 'B'
  else if (number >= 70 & number <= 79) grade = 'C'
  else if (number >= 60 & number <= 69) grade = 'D'

  return grade
}