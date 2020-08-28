def make_length(str, n):
  l = len(str)
  if l != n:
    return '0' * (n - l) + str
  else:
    return str

def solution(n, arr1, arr2):
  arr = [[0] * n for _ in range(n)]
  bin_arr1 = []
  bin_arr2 = []

  for i in range(n):
    bin_arr1.append(make_length(bin(arr1[i])[2:], n))
    bin_arr2.append(make_length(bin(arr2[i])[2:], n))

  for i in range(n):
    for j in range(n):
      arr[i][j] = '#' if (int(bin_arr1[i][j]) or int(bin_arr2[i][j]))  else ' '

  result = list(map(lambda x: ''.join(x), arr))
  return result


print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))