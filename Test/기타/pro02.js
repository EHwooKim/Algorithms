const firstFilter = num => (
  num[0] !== '-' &&
  num[num.length - 1] !== '-' &&
  !num.includes('--')
)

const secondFilter = num => {
  const infoObj = {
    numCount: 0,
    dashCount: 0,
    dashLocation: '',
  }
  for (let i = 0; i < num.length; i++) {
    if ('0123456789'.includes(num[i])) {
      infoObj.numCount += 1
    } else if ('-' === num[i]) {
      infoObj.dashCount += 1
      infoObj.dashLocation += i
    } else {
      return false
    }
  }
  if (infoObj.dashCount > 3 || infoObj.numCount < 11 || infoObj.numCount > 14) {
    return false
  }
  return infoObj
}

function solution(nums) {
  const firstFilterdNums = nums.filter(firstFilter)

  const result = []
  for (const num of firstFilterdNums) {
    const numInfo = secondFilter(num)

    if (numInfo) {
      const targetIndex = result.findIndex(target => {
        return Object.keys(numInfo).every(key => {
          return numInfo[key] === target[key]
        })
      })
      if (targetIndex === -1) {
        result.push({
          numCount: numInfo.numCount,
          dashCount: numInfo.dashCount,
          dashLocation: numInfo.dashLocation,
          count: 1
        })
      } else {
        result[targetIndex]['count'] += 1
      }
    }
  }

  return result.map(r => r.count).sort((a, b) => b - a)
}

console.log(solution(["4514--234495-1","305-44-291501","1-2-34-495-8623","492134545151","623-421523-67-341","-5439-59639921","6235-7X3+47-7456","98-76-543-210","512-73-634901","000-999999-22-555","064-82-792561"]))
console.log(solution(["1-2-3-456789012","582845-385823","48572-39485-89012","4-5-2-593328484","4958-39-2945123-","49582039415423","7-3-7-000000000","485723-693812","39482746582734","1-1-1-111111111","A4944-5095-4951","4851293412223"]))
console.log(solution(["592356=5345","49-694-4495-64","5923565345%"]))
