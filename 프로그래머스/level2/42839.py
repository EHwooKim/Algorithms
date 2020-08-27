def check_decimal(num):
  for i in range(2, int(num**(1/2)) + 1):
    if num % i == 0:
      return False
  return True

def comb(d, arr, tmp, used, result):
  if d >= 1 and int(tmp) not in [0, 1]:
    result.add(int(tmp))
  if d == len(arr):
    return result
  for i in range(len(arr)):
    if used & (1 << i): continue
    result = comb(d + 1, arr, tmp + arr[i], used | (1 << i), result)
  return result

def solution(numbers):
  result = 0
  num_set = comb(0, numbers, '', 0, set())
  for n in num_set:
    result += check_decimal(n)
  return result

print(solution('17'))