def solution(info, query):
  info_arr = list(map(lambda x: x.split(' '), info))
  query_arr = list(map(lambda x: x.split(' and '), query))
  for q in query_arr:
    q += q.pop(3).split(' ')
    
  result = []
  for q in query_arr:
    tmp = 0
    for i in info_arr:
      if ((q[0] == i[0]) or (q[0] == '-')) and ((q[1] == i[1]) or (q[1] == '-')) and ((q[2] == i[2]) or (q[2] == '-')) and ((q[3] == i[3]) or (q[3] == '-')) and ((int(q[4]) <= int(i[4])) or (q[4] == '-')):
        tmp += 1
    result.append(tmp)
  return result



print(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]	, ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]	))