def balancedSum(arr):
  left_sum = 0
  right_sum = sum(arr)
  
  for i in range(len(arr)):
    right_sum -= arr[i]
    if i != 0:
      left_sum += arr[i - 1]
    if left_sum == right_sum:
      return i


print(balancedSum([1, 2, 3, 4, 6 ]))
