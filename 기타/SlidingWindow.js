/*
  Given an array of integers and a number, write a function called maxSubarraySum
  , which finds the maximum sum of a subarray with the length of the number passed to the function. 
  Time Complexity - O(N)
  Space Complexity - O(1)
*/

function maxSubarraySum(arr, len) {
  if (arr.length < len) return null

  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += arr[i]
  }

  let MAX = sum
  let endIndex = len
  while (endIndex < arr.length) {
    sum -= arr[endIndex - len]
    sum += arr[endIndex]
    MAX = Math.max(MAX, sum)
    endIndex++
  }
  return MAX
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) //39
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) //5


/*
  Write a function called minSubArrayLen
  which accepts two parameters - an array of positive integers and a positive integer. 
  This function should return the minimal length of a contiguous
  subarray of which the sum is greater than or equal to the integer passed to the function.
  If there isn't one, return 0 instead.

  Time Complexity - O(n)
  Space Complexity - O(1)
*/
function minSubArrayLen(arr, target) {
  let index = -1
  let count = 0
  let MIN = Infinity
  let sum = 0

  while (index < arr.length) {
    if (sum < target) {
      sum += arr[++index]
      count += 1
    } else {
      MIN = Math.min(MIN, count)
      sum -= arr[index - (count - 1)]
      count -= 1
    }
  }
  return MIN === Infinity ? 0 : MIN
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 - [4, 3]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 - [62]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5

/*
  Write a function called findLongestSubstring, 
  which accepts a string and returns the length of the longest substring with all distinct characters.  
  
  Time Complexity - O(N)
*/

function findLongestSubstring(str) {
  let start = 0
  let end = 0
  let MAX = 0
  let frequencyCounter = {}

  while (end < str.length) {
    const s = str[end]
    if (frequencyCounter[s] !== undefined && frequencyCounter[s] >= start) {
      MAX = Math.max(MAX, end - start)
      start = frequencyCounter[s] + 1
    }
    frequencyCounter[s] = end
    end++
  } 

  MAX = Math.max(MAX, end - start)
  return MAX
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) //7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('thisishowwedoit')) //6

/*
  function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
*/