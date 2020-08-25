def euclidean(a, b):
    if b == 0:
        return a
    big = max(a, b)
    small = min(a, b)
    a, b = divmod(big, small)
    return 0 + euclidean(small, b)
    
def solution(w,h):
    total = w * h
    d = euclidean(w, h)
    erased_square = (w // d) + (h // d) - 1
    return total - erased_square * d

print(solution(5, 5))