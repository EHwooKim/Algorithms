function solution(inp_str) {
  const result = []
  if (inp_str.length < 8 || inp_str.length > 15) {
    result.push(1)
  }

  let strCondition = [0, 0, 0, 0, 0]
  let continuousCheck = {
    chekced: false,
    str: '',
    count: 0
  }
  const sameStrCheck = {
    checked: false,
    count: {}
  }

  for (const str of inp_str) {
    const second = strCheck(str)
    strCondition[second] = 1

    if (!continuousCheck.chekced) {
      if (continuousCheck.str === str) {
        continuousCheck.count += 1
      } else {
        continuousCheck = {
          chekced: false,
          str: str,
          count: 1
        }
      }
      if (continuousCheck.count >= 4) {
        result.push(4)
        continuousCheck.chekced = true
      }
    }

    if (!sameStrCheck.checked) {
      if (sameStrCheck.count[str] >= 4) {
        sameStrCheck.checked = true
        result.push(5)
      } else {
        sameStrCheck.count[str] = sameStrCheck.count[str] === undefined ? 1: sameStrCheck.count[str] + 1
      }
    }
  }

  if (strCondition[0]) {
    result.push(2)
  }
  if (strCondition.slice(1).reduce((a, b) => a + b) < 3) {
    result.push(3)
  }
  result.sort()

  if(result.length === 0) result.push(0)

  return result
}


function strCheck(str) {
  const num = str.charCodeAt()
  const special  = [
    126, 33, 64, 35, 36,
     37, 94, 38, 42
  ]

  if (num >= 48 && num <= 57) return 1
  if (num >= 65 && num <= 90) return 2
  if (num >= 97 && num <= 122) return 3
  if (special.includes(num)) return 4

  return 0
}

// console.log(solution("UUUUU"))
console.log(solution("ZzZz9Z824"))