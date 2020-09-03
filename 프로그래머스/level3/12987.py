def solution(A, B):
  A.sort()
  B.sort()
  result = 0
  for a in A:
    for b in B:
      if a < b:
        result += 1
        B.remove(b)
        break
  return result

print(solution([5,1,3,7], [2,2,6,8]))
print(solution([2, 2, 2, 2], [1, 1, 1, 1]))
