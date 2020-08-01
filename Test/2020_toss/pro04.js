const divmod = (a, b) => [ Math.floor(a / b), a % b ]

function commaizeNumber(num) {
  let number = num
  let moneyArr = []
  
  while (true) {
    let [moc, na] = divmod(number, 1000)
    moneyArr.unshift(na+'')
    number = moc
    if (moc === 0) break
  }
	return moneyArr.join(',');
}


function formatToKoreanNumber(num) {
  if (num === 0) return '0'
  
  let number = num
  let moneyArr = []
  for (let i = 0; i < 3; i++) {
    let [moc, na] = divmod(number, 10000)
    moneyArr.unshift(commaizeNumber(na))
    number = moc
  }
  console.log(moneyArr)

  let result = ''
  let unitArr = ['억 ', '만 ', ''];

  [0, 1, 2].forEach(index => {
    if (moneyArr[index] !== '0') {
      result += moneyArr[index] + unitArr[index]
    }
  })
	return result;
}

console.log(formatToKoreanNumber(0))
console.log(formatToKoreanNumber(123456543210))
