const divmod = (a, b) => [Math.floor(a / b), a % b]

const secondToTime = (n) => {
  const [hour, m] = divmod(n, 3600)
  const [minute,second] = divmod(m, 60)

  return [ hour, minute, second ]
}

const timeToStr = timeArr => (
  timeArr.map((item, index) => {
    if (index === 0) {
      return (item % 24 + '').padStart(2, '0')
    }
    return (item + '').padStart(2, '0')
  }).join(':')
)

function solution(p,n) {
  const [type, timeStr] = p.split(' ')
  const inputTime = timeStr.split(':')
  
  const hour = type === 'AM' ? inputTime[0] * 1 : inputTime[0] * 1 + 12
  const minute = inputTime[1] * 1
  const second = inputTime[2] * 1

  const timeToSecond = hour * 3600 + minute * 60 + second

  const timeAfter = secondToTime(timeToSecond + n)

  return timeToStr(timeAfter)
}


console.log(solution('AM 01:00:00', 200000))
console.log(solution('PM 01:00:00', 200000))
console.log(solution('AM 11:59:59', 200000))
console.log(solution('PM 11:59:59', 200000))

