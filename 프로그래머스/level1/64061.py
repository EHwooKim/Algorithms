def solution(board, moves):
  n = len(board)
  basket = [] 
  result = 0

  for col in moves:
    for i in range(n):
      if board[i][col-1]:
        if basket and basket[-1] == board[i][col-1] :
          basket.pop()
          result += 2
        else:
          basket.append(board[i][col-1])
        board[i][col-1] = 0
        break

  return  result

print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))
