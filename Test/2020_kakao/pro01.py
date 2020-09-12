def delete_wrong_char(string):
  result = ''
  for s in string:
    if s.isalnum() or s in ['-', '_', '.']:
      result += s
  return result

def delete_double_dot(string):
  result = ''
  tmp = False
  for s in string:
    if tmp and s == '.': continue
    result += s
    tmp = (s == '.')
  return result

def delete_endpoint_dot(string):
  start = 0
  end = len(string)
  if string[start] == '.':
    start += 1
  if string[end - 1] == '.':
    end -= 1
  return string[start : end]

def add_char(count, char, string):
  string = string + (count * char)
  return string


def solution(new_id):
  new_id = new_id.lower() # 소문자로 치환
  new_id = delete_wrong_char(new_id) # 불필요한 문자 제거
  new_id = delete_double_dot(new_id) # 연속된 점 제거
  new_id = delete_endpoint_dot(new_id) # 양끝 점 제거
  if not new_id:
    new_id = add_char(1, 'a', new_id) # 빈 문자열이면 a 더하기
  new_id = new_id[0:15] # 15자까지 자르기
  new_id = delete_endpoint_dot(new_id) # 양끝 점 제거
  if len(new_id) <= 2: 
    new_id = add_char(3 - len(new_id), new_id[-1], new_id) # 지정된 길이만큼 마지막 문자 더하기
  return new_id

solution("...!@BaT#*..y.abcdefghijklm."	)
solution("=.="	)