def make_num(k, tmp, count):
  stick_count = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6] 
  if k == 0:
    return count + 1

  for i in range(10):
    if tmp == '0': continue

    if stick_count[i] <= k:
      count = make_num(k - stick_count[i], tmp + str(i), count)
  return count

def solution(k):
  result = make_num(k, '', 0)
  return result

print(solution(6))
print(solution(11))