function solution(leave, day, holidays) {
  const calendar = new Array(30).fill(0)
  getWeekend(day).forEach(d => {
    calendar[d - 1] = 1
  })
  holidays.forEach(d => {
    calendar[d - 1] = 1
  })

  if (leave >= 30 - calendar.reduce((a, b) => a + b)) return 30

  let result = 0
  for (let i = 0; i < 31; i++) {
    const newCalendar = fillArr(calendar, leave, i)
    result = Math.max(result, getLongestHolidays(newCalendar))
  }

  return result
}

function getWeekend(day) {
  const arr = ['SAY', 'FRI', 'THU', 'WED', 'THE', 'MON']
  const additional = arr.findIndex(n => n === day)

  let Sat = additional === -1 ? 7 : additional + 1
  let Sun = additional === -1 ? 1 : Sat + 1

  const result = [Sat, Sun]
  for (let i = 0; i < 5; i++) {
    Sat += 7
    Sun += 7
    if (Sat < 31) result.push(Sat)
    if (Sun < 31) result.push(Sun)
  }

  return result
}

function fillArr(arr, count, start) {
  arr = [...arr]
  let index = start
  while (count > 0 && index < 31) {
    if (!arr[index]) {
      arr[index] = 1
      count -= 1
    }
    index += 1
  }
  return arr
}

function getLongestHolidays(arr) {
  let MAX = 0
  let tmp = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      tmp += 1
    }
    if (!arr[i] && tmp) {
      MAX = Math.max(MAX, tmp)
      tmp = 0
    }
  }
  if (tmp) {
    MAX = MAth.max(MAX, tmp)
  }
  return MAX
}