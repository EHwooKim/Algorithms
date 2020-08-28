def MBN(arr, tmp, length):
  numbers = '0123456789'

  if len(tmp) == length:
    arr.append(tmp)
    return arr

  for n in numbers:
    if len(tmp) == 0 or (len(tmp) and tmp[-1] < n):
      arr = MBN(arr, tmp + n, length)
      
  return arr

def solution(k):
  length = 1
  arr = []

  while length <= 10:
    arr += MBN([], '', length)
    length +=1

  if k <= len(arr):
    return arr[k-1] 
  else:
    return '-1'

print(solution(11))
