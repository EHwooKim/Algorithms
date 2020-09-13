from collections import deque

def solution(ball, order):
  init_ball_length = len(ball)
  ball = deque(ball)
  order = deque(order)
  waiting_ball = []
  result = []

  while len(result) != init_ball_length:
    
    removed = True
    tmp_arr = []

    while removed:
      for b in waiting_ball:
        if ball[0] == b:
          result.append(ball.popleft())
        elif ball[-1] == b:
          result.append(ball.pop())
        else:
          tmp_arr.append(b)
      if len(waiting_ball) == len(tmp_arr):
        removed = False
      else:
        waiting_ball = tmp_arr
      
    now_ball = order.popleft()
    if ball[0] == now_ball:
      result.append(ball.popleft())
    elif ball[-1] == now_ball:
      result.append(ball.pop())
    else:
      waiting_ball.append(now_ball)
  
  return result
 
print(solution([1, 2, 3, 4, 5, 6], [6, 2, 5, 1, 4, 3]))  #[6, 5, 1, 2, 4, 3]
print(solution([11, 2, 9, 13, 24],	[9, 2, 13, 24, 11])) # [24, 13, 9, 2, 11]
