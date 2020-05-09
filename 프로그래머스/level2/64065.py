def solution(string):
    answer = []
    arr = []
    tmp_str = ''
    for s in string:
        if s == '{':
            tmp_arr = []
        elif s != ',' and s != '}':
            tmp_str += s
        elif s == ',' and len(tmp_str):
            tmp_arr.append(int(tmp_str))
            tmp_str = ''
        elif s == '}' and tmp_str:
            tmp_arr.append(int(tmp_str))
            tmp_str = ''
            arr.append(tmp_arr)
            
    arr.sort(key=lambda x: len(x))
    for a in arr:
        for _ in a:
            if _ not in answer: answer.append(_)
    return answer

print(solution('{{2,1,3},{2},{2,1},{2,1,3,4}}'))
print(solution("{{20,111},{111}}"))