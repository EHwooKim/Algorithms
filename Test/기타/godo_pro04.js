function solution(cardNumber){
  const numberArr = [...cardNumber+''].map(num => num * 1)
  const startIndex = numberArr.length % 2 ? 1 : 0 
  for (let i = startIndex; i < numberArr.length; i += 2) {
      numberArr[i] *= 2
  }
  const sum = numberArr.reduce((a, b) => {
      let tmp = b
      if (tmp >= 10) {
          tmp = 1 + (tmp % 10)
      }
      return a + tmp
  }, 0)
  const result = sum % 10 ? 'INVALID' : "VALID"
  return result
}