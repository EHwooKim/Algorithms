def solution(priorities, location):
    N = len(priorities)
    i = 0
    print_order = []

    while len(print_order) != N:
        n = i % N
        if priorities[n] and priorities[n] == max(priorities):
            print_order.append(n)
            priorities[n] = 0
        i += 1
    
    return print_order.index(location) + 1