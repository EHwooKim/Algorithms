def minX(arr):
  start = 0
  tmp = 0
  for a in arr:
    tmp += a
    while tmp < 1:
      start += 1
      tmp += 1
  return start

print(minX([-2, 3, 1, -5]))