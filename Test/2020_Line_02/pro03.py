def sum_by_index(string, index):
  number = int(string[0:index]) + int(string[index:])
  return str(number)

def make_number(MIN, MIN_NUM,  count, num_string):
  if count > MIN:
    return [MIN, int(MIN_NUM)]
  if len(num_string) == 1:
    return [min(MIN, count), int(num_string)]
  for i in range(1, len(num_string)):
    if num_string[i] == '0':
      continue
    MIN, MIN_NUM = make_number(MIN, MIN_NUM, count + 1, sum_by_index(num_string, i))
  return [MIN, int(MIN_NUM)]

def solution(n):
  answer = make_number(100, '', 0, str(n))
  return answer


print(solution('73425'))
print(solution('10007'))
print(solution('9'))

