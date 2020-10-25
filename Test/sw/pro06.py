def countPerms(n):
  info = {
    'a': {
      'following': ['e'],
      'before': 1,
      'after': 1
    },
    'e': {
      'following': ['a', 'i'],
      'before': 1,
      'after': 1
    },
    'i': {
      'following': ['a', 'e', 'o', 'u'],
      'before': 1,
      'after': 1
    },
    'o': {
      'following': ['i', 'u'],
      'before': 1,
      'after': 1
    },
    'u': {
      'following': ['a'],
      'before': 1,
      'after': 1
    }
  }

  for i in range(n + 1):
    if i >= 2:
      for key in info.keys():
        tmp = 0
        for a in info[key]['following']:
          tmp += info[a]['before']
        info[key]['after'] = tmp % (10**9 + 7)
      for key in info.keys():
        info[key]['before'] = info[key]['after']
  
  SUM = 0
  for key in info.keys():
    SUM += info[key]['after']

  return SUM
  

print(countPerms(500000))
