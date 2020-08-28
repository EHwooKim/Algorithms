const solution = (n, arr1, arr2) => {
  let result = []
  for (let i = 0; i < n; i++) {
    let tmp = (arr1[i] | arr2[i]).toString(2)
    tmp = tmp.padStart(n, '0')
    tmp = tmp.replace(/1/gi, '#')
    tmp = tmp.replace(/0/gi, ' ')
    result.push(tmp)
  }
  return result
}