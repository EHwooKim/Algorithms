def turn_right(num):
  return (num + 1) % 4

def turn_left(num):
  return 3 if num == 0 else num -1

def go_straight(direction, position):
  front_by_direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  x, y = position[0], position[1]
  a, b = front_by_direction[direction]   
  return [x + a, y + b]

def check(arr, checking, direction, position):
  checking_dict = {
    'left': [[0, -1], [-1, 0], [0, 1], [1, 0]],
    'front': [[0, -1], [-1, 0], [0, 1], [1, 0]]
  }
  x, y = position[0], position[1]
  a, b = checking_dict[checking][direction]
  dx, dy = x + a, y + b
  if 0 <= dx < len(arr) and 0 <= dy < len(arr):
    if arr[dx][dy]: # 왼쪽 벽이 막혀있으면 False
      return False
    else:
      return True
  else: # 범위 바깥이어도 False
    return False

def solution(maze):
  direction = 0 # 처음 방향
  position = [0, 0]
  count = 0

  while sum(position) != (len(maze) - 1) * 2:
    # 왼쪽이 뚫려있으면 왼쪽으로 돌고 앞으로 한칸
    if check(maze, 'left',  direction, position):
      direction = turn_left(direction)
      position = go_straight(direction, position)
      count += 1
    else:
      # 왼쪽이 막혀있고 앞이 뚫려있으면 앞으로 한칸
      if check(maze, 'front', direction, position):
        position = go_straight(direction, position)
        count += 1
      # 왼쪽도 앞쪽도 막혀있으면 오른쪽으로 돌기
      else:
        direction = turn_right(direction)
  return count


solution([[0, 1, 0, 1], [0, 1, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0]])
solution([[0, 1, 0, 0, 0, 0], [0, 1, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0]]	)
solution([[0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0]]	)
solution([[0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0]]	)