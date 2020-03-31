def solution(progresses, speeds):
    answer = []
    N = len(progresses)
    n = 0
    while (n != N):
        for i in range(N):
            progresses[i] += speeds[i]
        if progresses[n] >= 100:
            i = 1
            while (n + i < N and progresses[n + i] >= 100):
                i +=1
            answer.append(i)
            n += i
    return answer

