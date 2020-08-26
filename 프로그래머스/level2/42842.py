def make_arr(num):
  arr = []
  square = int(num ** (1/2))
  for i in range(1, square + 1):
    if not num % i:
      arr.append([i, num // i])
  return arr


def solution(brown, yellow):
  arr = make_arr(yellow)
  for a in arr:
    if sum(a) * 2 + 4 == brown:
      a.sort(reverse=True)
      return [a[0] + 2, a[1] + 2]
      


print(solution(24, 24))
