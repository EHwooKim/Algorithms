const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

padZero = (num) => {
  if (num < 10) return `0${num}`
  return num
}

class Time {
  constructor(time) {
    this.time = time

    const [hour, min, sec] = time.split(':').map(Number)
    this.hour = hour
    this.min = min
    this.sec = sec
  }

  timeAfter(afterTime) {
    this.hour += afterTime.hour
    this.min += afterTime.min
    this.sec += afterTime.sec
    this.formatting()
  }
  timeBefore(beforeTime) {
    this.hour -= beforeTime.hour
    this.min -= beforeTime.min
    this.sec -= beforeTime.sec
    this.formatting()
  }
  get getTime() {
    return `${padZero(this.hour)}:${padZero(this.min)}:${padZero(this.sec)}`
  }

  formatting = () => {
    if (this.sec >= 60) {
      this.min += 1
      this.sec -= 60
    } else if (this.sec < 0) {
      this.min -= 1
      this.sec += 60
    }
    if (this.min >= 60) {
      this.hour += 1
      this.min -= 60
    } else if (this.min < 0) {
      this.hour -= 1
      this.min += 60
    }
    if (this.hour >= 24) {
      this.hour -= 24
    } else if (this.hour < 0) {
      this.hour += 24
    }
  }
}

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [currentTime, terrorTime] = input

  console.log(solution(currentTime, terrorTime))

  function solution(currentTime, terrorTime) {
    if (currentTime === terrorTime) return '24:00:00'

    const current = new Time(currentTime)
    const terror = new Time(terrorTime)


    terror.timeBefore(current)
    
    return terror.getTime
  }

  process.exit()
})
