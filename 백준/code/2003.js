let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(n => n * 1);
let numbers = [...input[1].split(' ')].map(n => n * 1);

function solution(arr, goal) {
  let left = 0
  let right = -1
  let sum = 0

  let count = 0

  while (right < arr.length) {
    if (sum <= goal) {
      right += 1
      sum += arr[right]
    } else {
      sum -= arr[left]
      left += 1
    }

    if (sum === goal) {
      count += 1
    }
  }
  return count
}

console.log(solution(numbers, M))
console.log(solution([1, 2, 3, 4, 2, 5, 3, 1, 1, 2], 5))
