def solution(n, text, second):
  text_length = len(text)
  result = ''
  if second <= text_length:
    result = text[:second].replace(' ', '_')
    result = result.rjust(n, '_')
  else:
    result = text[second - n:].replace(' ', '_')
    result = result.ljust(n, '_')
  return result

print(solution(6, 'hi bye', 2))