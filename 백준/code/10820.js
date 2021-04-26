const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const checkCondition = (s, range) => {
    const charCode = s.charCodeAt()
    return (charCode >= range[0] && charCode <= range[1])
  }

  const returnCount = (str) => {
    const conditions = {
      isLowerCase: {
        range: [97, 122],
        count: 0
      },
      isUpperCase: {
        range: [65, 90],
        count: 0
      },
      isNumber: {
        range: [48, 57],
        count: 0
      },
      isBlank: {
        range: [32, 32],
        count: 0
      }
    }
  
    const orderOfConditions = ['isLowerCase', 'isUpperCase', 'isNumber', 'isBlank']
    
    for (const s of str) {
      for (const condition of orderOfConditions) {
        const { range } = conditions[condition]
        if (checkCondition(s, range)) {
          conditions[condition].count += 1
          break
        }
      }
    }
  
    const result = orderOfConditions
      .map(condition => conditions[condition].count)
    
    return result.join(' ')
  }

  const solution = (arr) => {
    const result = arr.map(returnCount)
    return result.join('\n')
  }

  console.log(solution(input))

  process.exit()
})

