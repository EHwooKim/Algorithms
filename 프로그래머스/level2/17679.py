def check_block(a, b, board):
  if board[a][b] == board[a][b + 1] == board[a + 1][b]  == board[a + 1][b + 1] :
    return True
  return False

def block_down(M, N, board):
  arr = [[0] * N for _ in range(M)]
  for n in range(N):
    tmp = M - 1
    for m in range(M - 1, -1, -1):
      if board[m][n]:
        arr[tmp][n] = board[m][n]
        tmp -= 1
  return arr

def count(M, N, board):
  result = 0
  for m in range(M):
    for n in range(N):
      if not board[m][n]: 
        result += 1
  return result

def solution(M, N, board):
  board = [list(b) for b in board]
  arr = []
  while True:
    for m in range(M - 1):
      for n in range(N - 1):
        if board[m][n] and check_block(m, n, board):
          arr += [(m, n), (m, n + 1), (m + 1, n), (m + 1, n + 1)]
    if not arr:
      break
    for a in arr:
      board[a[0]][a[1]] = 0
    board = block_down(M, N, board)
    arr = []
  result = count(M, N, board)
  return result

print(solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']))
