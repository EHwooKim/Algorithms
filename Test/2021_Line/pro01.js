function solution(table, languages, preference) {
  const points = {}
  for (let data of table) {
    data = data.split(' ')
    const [job, ...lang] = data
    points[job] = lang.reverse()
  }

  const jobNames = Object.keys(points)
  let result = []
  let maxPreferencePoint = 0

  for (const jobName of jobNames) {

    let currentPoint = 0

    for (let i = 0;i < languages.length; i++) {
      const language = languages[i]
      const preferencePoint = preference[i]

      const pointByJob = points[jobName].findIndex(n => n === language)
      currentPoint += (pointByJob + 1) * preferencePoint
    }

    if (currentPoint > maxPreferencePoint) {
      maxPreferencePoint = currentPoint
      result = [jobName]
    } else if (currentPoint === maxPreferencePoint) {
      result.push(jobName)
    }
  }  
  result.sort()
  console.log(result)
  return result[0]
}

// solution(
//   ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"],
//   ["PYTHON", "C++", "SQL"],
//   [7, 5, 5]
// )
//"HARDWARE"
console.log(solution(
  ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"],
  ["JAVA", "JAVASCRIPT"],
  [7, 5]
))
