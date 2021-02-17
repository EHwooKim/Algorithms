function solution(s) {
  let maxLength = 1

  for (let i = 0; i <= s.length - maxLength; i++) {
    for (let j = maxLength; j <= s.length - i; j++) {
      const subStr = s.substr(i, j)
      if (isPalindrome(subStr)) {
        maxLength = subStr.length
      }
    }
  }

  return maxLength
}

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}