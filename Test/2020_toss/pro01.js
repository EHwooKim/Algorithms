function getMaskedName(name) {
  const result = name.slice(0, 2) + '*'.repeat(name.length - 2)
	return result
}


console.log(getMaskedName('12345'))