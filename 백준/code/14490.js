const input = require('fs').readFileSync('/dev/stdin').toString()

console.log(solution(input))

function solution(input) {
  const [num1, num2] = input.split(':').map(Number)
  const gcd = Euclidean(num1, num2)
  return [num1, num2].map(n => Math.floor(n / gcd)).join(':')
}


function Euclidean(num1, num2) {
  if (num1 < num2) {
    [num1, num2] = [num2, num1]
  } 
  if (num2 === 0) {
    return num1
  } 
  if (num1 % num2 === 0) {
    return num2
  } else {
    return Euclidean(num2, num1 % num2)
  }

}