function solution(info, query) {
  const tag = ['lang', 'end', 'career', 'food', 'point']

  let info_arr = info.map(v => v.split(' '))
  info_arr = info_arr.map(info => {
    let return_obj = {};
    Array(tag.length).fill().map((_, i) => i)
      .forEach(index => {
      return_obj[tag[index]] = info[index]
    })
    return return_obj
  })
  
  let query_arr = query.map(v => v.split(' and '))
  query_arr.map(v => v.splice(3, 1, ...v[3].split(' ')))
  query_arr = query_arr.map(query => {
    let return_obj = {};
    Array(tag.length).fill().map((_, i) => i)
      .forEach(index => {
      if (query[index] !=='-') {
        return_obj[tag[index]] = query[index]
      }
    })
    return return_obj
  })

  const result_arr = query_arr.map(query => {
    return info_arr.filter(info => {
      return Object.keys(query).every(key => {
        if (key === 'point') {
          return info[key] * 1 >= query[key] * 1
        } else {
          return info[key] === query[key]
        }
      })
    }).length
  })

  return result_arr
}




// function solution(info, query) {

//   const tag_info = {
//     lang: ['java', 'python', 'cpp'],
//     end: ['frontend', 'backend'],
//     career: ['junior', 'senior'],
//     food: ['pizza', 'chicken'],
//     point: [0]
//   }
//   const tags = Object.keys(tag_info)

//   const info_obj = {
//     java: {
//       frontend: {
//         junior: {
//           pizza: [],
//           chicken: []
//         },
//         senior: {
//           pizza: [],
//           chicken: []
//         }
//       },
//       backend: {
//         junior: {
//           pizza: [],
//           chicken: []
//         },
//         senior: {
//           pizza: [],
//           chicken: []
//         }
//       }
//     },
//     cpp: {
//       frontend: {
//         junior: {
//           pizza: [],
//           chicken: []
//         },
//         senior: {
//           pizza: [],
//           chicken: []
//         }
//       },
//       backend: {
//         junior: {
//           pizza: [],
//           chicken: []
//         },
//         senior: {
//           pizza: [],
//           chicken: []
//         }
//       }
//     },
//     python: {
//       frontend: {
//         junior: {
//           pizza: [],
//           chicken: []
//         },
//         senior: {
//           pizza: [],
//           chicken: []
//         }
//       },
//       backend: {
//         junior: {
//           pizza: [],
//           chicken: []
//         },
//         senior: {
//           pizza: [],
//           chicken: []
//         }
//       }
//     }
//   }
  
//   let info_arr = info.map(v => v.split(' '))
//   info_arr = info_arr.map(info => {
//     let return_obj = {};
//     Array(tags.length).fill().map((_, i) => i)
//       .forEach(index => {
//       return_obj[tags[index]] = info[index]
//     })
//     return return_obj
//   })
//   info_arr.forEach(v => {
//     info_obj[v.lang][v.end][v.career][v.food].push(v.point * 1)
//   })
  
//   let query_arr = query.map(v => v.split(' and '))
//   query_arr.map(v => v.splice(3, 1, ...v[3].split(' ')))
//   query_arr = query_arr.map(query => {
//     let return_obj = {};
//     Array(tags.length).fill().map((_, i) => i)
//       .forEach(index => {
//       if (query[index] !=='-') {
//         return_obj[tags[index]] = [query[index]]
//       }
//     })
//     return return_obj
//   })

//   let now_tag_info
//   let tmp_arr

//   let result_arr = query_arr.map(query => {
//     now_tag_info = {...tag_info}
//     tmp_arr = []
//     for (let key in query) {
//       now_tag_info[key] = query[key]
//     }
    
//     now_tag_info.lang.forEach(l => {
//       now_tag_info.end.forEach(e => {
//         now_tag_info.career.forEach(c => {
//           now_tag_info.food.forEach(f => {
//             tmp_arr = [...tmp_arr, ...info_obj[l][e][c][f]]
//           })
//         })
//       })
//     })
//     return tmp_arr.filter(p => p >= now_tag_info.point * 1).length
//   })
//   return result_arr
// }

// console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]	, ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]	))
