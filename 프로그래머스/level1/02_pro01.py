def make_num(number):
  numbers = "012"
  m, n = divmod(number, 3)
  if m == 0:
    return numbers[n]
  else:
    return make_num(m) + numbers[n]


def solution(n):
  answer = ''.join(make_num(n))
  result = 0
  for i in range(len(answer)):
    result += int(answer[i]) * (3 ** i)
  return result

print(solution(45))