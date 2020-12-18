/*
  Write a function called sameFrequency. Given two positive integers,
  find out if the two numbers have the same frequency of digits,
  Your solution MUST have the following comlexities:
  Time: O(N)
*/

function sameFrequency(num1, num2) {
  const strNum1 = num1.toString()
  const strNum2 = num2.toString()
  if (strNum1.length !== strNum2.length) return false

  const obj = {}

  for (const n of strNum1+'') {
    obj[n] = (obj[n] || 0) + 1
  }

  for (const n of strNum2+'') {
    if (!obj[n]) return false
    obj[n] -= 1
  }
  
  return true
}

[[182, 281], [32, 14], [3589578, 5879385], [22, 222]]
  .forEach(arr => console.log(sameFrequency(arr[0], arr[1])))
// tue, false, true, false


/*
  Implement a function called, areThereDuplicates which accepts a variable number of arguments,
  and checks whether there are duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
  Time - O(N) or O(n log n)
  Space - O(N) or O (1)
*/

function areThereDuplicates(arr) {
  const frequencyCounter = {}
  for (const a of arr) {
    if (frequencyCounter[a]) return true
    frequencyCounter[a] = 1
  }
  return false
}

[[1, 2, 3], [1, 2, 2], ['a', 'b', 'c', 'a']]
  .forEach(arr => console.log(areThereDuplicates(arr)))
// false true true
  
function areThereDuplicatesSecond(arr) {
  arr.sort()
  let i = 0
  let j = 1
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      return true
    }
    i++
    j++
  } 
  return i !== arr.length - 1
}
[[1, 2, 3], [1, 2, 2], ['a', 'b', 'c', 'a']]
  .forEach(arr => console.log(areThereDuplicatesSecond(arr)))
// false true true




