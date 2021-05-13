def solution(s):
  try_count = 0
  zero_count = 0

  while s != '1':
    try_count += 1
    removed_zero = s.replace('0', '')
    zero_count += (len(s) - len(removed_zero))
    s = bin(len(removed_zero))[2:]

  return [try_count, zero_count]

print(solution("110010101001"	))


