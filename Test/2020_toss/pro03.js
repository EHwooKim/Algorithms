const divmod1000 = a => [ Math.floor(a / 1000), a % 1000 ]

function commaizeNumber(num) {
  let number = num
  let moneyArr = []
  
  while (true) {
    let [moc, na] = divmod1000(number)
    console.log(moc, na)
    moneyArr.unshift(na+'')
    number = moc
    if (moc === 0) break
  }
	return moneyArr.join(',');
}

console.log(commaizeNumber(1234567))

let a = [1, 2, 3]
a.unshift(4)
console.log(a)