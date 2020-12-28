/*
  # Radix Sort  
  - Radix sort is a special sorting algorithm that works on lists of numbers
  - It never makes comparisons between elements
  - It exploits the fact that information about the size of a number is
    encoded in the number of digits
  - More digits means a bigger number
  - 일의 자리부터 자리수를 높여가며 해당 자리수의 값이 같은 요소들끼리 그룹짓고
    다시 펼치고를 반복 
*/
/*
  ## Radis Sort Helpers
  - In order to implement radix sort, it's helpful to build a few helper function
    * getDigit(num, place) - returns the digit in num at the given place value
    * digitCount(num) - returns the number of digitsin num
    * mostDigit(nums) - Given an array of numbers, returns the number of digits
                        in the largest numbers in the list

*/
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
const mostDigit = (nums) => {
  return Math.max(...nums.map(n => digitCount(n)))
}

/*
  ## Radix Sort Pseudocode
  - Define a function that accepts list of numbers
  - Figure out how many digits the largest number has
  - Loop from k = 0 up to this largest number of digits
  - For each iteration of the loop:
    * Create buckets for each digit (0 to 9)
    * place each number in the corresponding bucket based on its kth digit
  - Replace our existing array with values in our buckets,
    starting with 0 and going up to 9
  - return list at the end
*/

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([23, 345, 5467, 12, 2346, 2345, 9482]))

/*
  ## Time Complexity
  - General - O(NK)
  - Best - O(NK)
  - Worst - O(NK)
  - Space Complexity - O(N + K) : n (length of array), k (number of digits(average))
*/
