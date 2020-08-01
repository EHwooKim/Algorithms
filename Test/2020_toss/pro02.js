const divmod = (a, b) => [Math.floor(a / b), a % b]

function splitDutchPayAmount(peopleCount, amount) {
  let [moneyPerPerson, extraMoney] = divmod(amount, peopleCount)
  let result = Array(peopleCount).fill(moneyPerPerson)
  result[0] += extraMoney
	return result
}

console.log(splitDutchPayAmount(3, 4))